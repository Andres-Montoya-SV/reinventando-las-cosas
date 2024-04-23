export const interceptors = {
  request: [],
  response: [],
};

export function addRequestInterceptor(interceptor) {
  interceptors.request.push(interceptor);
}

export function addResponseInterceptor(interceptor) {
  interceptors.response.push(interceptor);
}
