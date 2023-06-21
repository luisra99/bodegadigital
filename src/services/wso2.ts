import axios, { AxiosHeaders } from 'axios';

import { Buffer } from 'buffer';

export async function getToken(): Promise<AxiosHeaders> {
  const ip = 'http://bodega.prod.xetid.cu/apim';
  const port = '';
  const token_endpoint = `${ip}${port ? `:${port}` : ''}/oauth2/token`;
  const customer_key = '_02ZmCsRRkFlPi3YuT9YNn3fxDoa';
  const customer_secret = '8n4izRnZkGQtzZ38lq1qrlBWncoa';
  const basic = Buffer.from(`${customer_key}:${customer_secret}`).toString('base64');
  try {
    const response = await axios.post(
      token_endpoint,
      {
        grant_type: 'client_credentials',
      },
      {
        headers: {
          Authorization: `Basic ${basic}`,
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    const { access_token } = response.data || {};
    return new AxiosHeaders({
      Authorization: `Bearer ${access_token}`,
      'Access-Control-Allow-Origin': '*',
    });
  } catch (err) {
    console.log(err);
    return new AxiosHeaders({});
  }
}
