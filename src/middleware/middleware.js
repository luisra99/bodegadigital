import { Buffer } from 'buffer';
import express from 'express';
import https from 'https';

import axios from 'axios';

const app = express();
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const instance = axios.create({
  httpsAgent: agent,
});

app.get('/token', async (req, res) => {
  try {
    const ip = import.meta.env.VITE_AM_IP;
    const port = import.meta.env.VITE_AM_PORT;
    const token_endpoint = `${ip}${port ? `:${port}` : ''}/oauth2/token`;
    const customer_key = import.meta.env.VITE_AM_COSTUMER_KEY;
    const customer_secret = import.meta.env.VITE_AM_COSTUMER_SECRET;
    const basic = Buffer.from(`${customer_key}:${customer_secret}`).toString('base64');
    const response = await instance({
      method: 'post',
      url: token_endpoint,
      headers: {
        Authorization: `Basic ${basic}`,
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        grant_type: 'client_credentials',
      },
    });
    const { access_token } = response.data || {};

    res.json({
      Authorization: `Bearer ${access_token}`,
      'Access-Control-Allow-Origin': '*',
    });
  } catch (error) {
    console.error(`Error occurred while fetching token. Details: ${error.message}`);
    return {};
  }
  //TODO: llamar al api de enzona
});
export const handler = app;
