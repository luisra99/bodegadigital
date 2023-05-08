import { ApiConfig } from '@interfaces/request-interface';

import axios from 'axios';

export async function getToken(key: any) {
  const config = process.env.WSO2?.[key] as ApiConfig | undefined;
  if (!config) {
    console.error(`Config not found for key ${key}`);
    return null;
  }

  const { AM_CONSUMER_KEY, AM_CONSUMER_SECRET, AM_PROTOCOL, AM_IP, AM_PORT, AM_TOKEN_ENDPOINT } =
    config;

  const dir = `${AM_PROTOCOL}://${AM_IP}${AM_PORT ? `:${AM_PORT}` : ''}`;
  const dir_token = dir + AM_TOKEN_ENDPOINT;

  const basic = Buffer.from(`${AM_CONSUMER_KEY}:${AM_CONSUMER_SECRET}`).toString('base64');
  try {
    const response = await axios({
      method: 'post',
      url: dir_token,
      headers: {
        Authorization: `Basic ${basic}`,
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        grant_type: 'client_credentials',
      },
    });
    console.log('Token', response.data);
    return response.data;
  } catch (error: any) {
    console.error(`Error occurred while fetching token. Details: ${error.message}`);
    return null;
  }
}
