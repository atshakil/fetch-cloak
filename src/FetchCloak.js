import fetch from 'isomorphic-fetch';

export default url => {
  const init = (method, args) => Object.assign({
    method,
    mode: 'cors',
    headers: Object.assign({"Content-Type": "application/json"}, args.headers),
    body: JSON.stringify(args.data)
  }, args.init);

  const request = (method, args) => {
    if(args.raw) {
      if (args.success && args.error) {
        fetch(url, init(method, args))
          .then(args.success).catch(args.error);
      } else if (args.success) {
        fetch(url, init(method, args))
          .then(args.success);
      } else if (args.error) {
        fetch(url, init(method, args))
          .catch(args.error);
      } else {
        fetch(url, init(method, args));
      }
    } else {
      if (args.success && args.error) {
        fetch(url, init(method, args))
          .then((response) => response.json().then(args.success))
          .catch(args.error);
      } else if (args.success) {
        fetch(url, init(method, args))
          .then((response) => response.json().then(args.success));
      } else if (args.error) {
        fetch(url, init(method, args))
          .catch(args.error);
      } else {
        fetch(url, init(method, args));
      }
    }
  };

  return {
    get: (args) => request('GET', args),
    post: (args) => request('POST', args),
    put: (args) => request('PUT', args),
    delete: (args) => request('DELETE', args)
  };
};

