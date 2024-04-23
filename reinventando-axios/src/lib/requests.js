import { interceptors } from './interceptors.js';
import FetchError from './fetchError.js';
 
/**
 * @param {string} url 
 * @param {object} data 
 * @param {string} method 
 * @param {string} cache 
 * @param {string} credentials 
 * @param {object} headers 
 * @param {string} redirect 
 * @param {string} referrerPolicy 
 * @param {string} mode 
 * @returns response.json()
*/

export default async function request(url, options = {}, credentials = "same-origin", redirect = "follow", referrerPolicy = "no-referrer", retries = 3) {
  const { method = "GET", headers = {}, body = null, params = {} } = options;

  if (params && Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params).toString();
    url += `?${queryString}`;
  }

  const config = {
    method: method,
    headers: new Headers(headers),
    credentials: credentials,
    redirect: redirect,
    referrerPolicy: referrerPolicy,
  };

  if (method !== "GET" && method !== "HEAD" && body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    for (const interceptor of interceptors.response) {
      response = await interceptor(response);
    }

    if (!response.ok && body) {
        throw new FetchError(`HTTP error ${new Date().toLocaleString()} ${response.status}: ${response.statusText}`, response.status, body);
    }

    if (!response.ok) {
        throw new FetchError(`HTTP error ${new Date().toLocaleString()} ${response.status}: ${response.statusText}`, response.status);
    }

    return response.json();
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`Error ${error.status}: ${error.message}`);
      console.error(`Error body: ${error.body}`);
    } else {
      console.error('Unexpected error:', error);
    }
  }
  
}
  