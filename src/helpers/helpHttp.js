export const helpHttp = () => {
 const customFetch = (endpoint, options) => {
  const defaultHeader = {
   accept: 'application/json',
  };

  const controller = new AbortController();
  options.signal = controller.signal;

  options.method = options.method || 'GET';
 };
};
