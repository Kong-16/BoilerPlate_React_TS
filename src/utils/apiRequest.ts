import axios from 'axios';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS';

async function apiRequest(method: Method, url: string, data?: object) {
  const options = {
    url: url,
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  let res = await axios(options);
  return res.data;
}
export { apiRequest };
