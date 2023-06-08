import { Buffer } from 'buffer';
import express from 'express';
import https from 'https';

import { getToken } from '@/services/wso2';

import axios from 'axios';

const app = express();
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const instance = axios.create({
  httpsAgent: agent,
});

const customer_key = import.meta.env.VITE_AM_COSTOMER_KEY;
const customer_secret = import.meta.env.VITE_AM_COSTOMER_SECRET;
const protocol = import.meta.env.VITE_AM_PROTOCOL;
const ip = import.meta.env.VITE_AM_IP;
const port = import.meta.env.VITE_AM_PORT;
const token_endpoint = import.meta.env.VITE_AM_TOKEN_ENDPOINT;

app.get('/token', async (req, res) => {
  const dir = `${ip}${port ? `:${port}` : ''}/oauth2/token`;
  const dir_token = dir;
  const basic = Buffer.from(`${customer_key}:${customer_secret}`).toString('base64');
  try {
    const response = await instance({
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
    const { access_token } = response.data || {};
    console.log(basic);

    console.log(access_token);

    res.json({
      Authorization: `Bearer ${access_token}`,
      'Access-Control-Allow-Origin': '*',
    });
  } catch (error) {
    console.error(`Error occurred while fetching token. Details: ${error.message}`);
    return {};
  }
  // try {
  //   axios
  //     .post('https://identity.enzona.net/oauth2/token')
  //     .then((response) => console.log(response));
  // } catch (err) {
  //   console.log(err);
  // }
  //TODO: llamar al api de enzona
});
// app.use((req, res, next) => {
//   if (req.path === '/oauth2/token') {
//     console.log('cors');
//     req.set('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//   }
//   next();
// });
export const handler = app;
