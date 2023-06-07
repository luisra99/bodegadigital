import { ApiConfig, RawAxiosHeaders } from '@interfaces/request-interface';

import axios from 'axios';

export async function getToken(): Promise<RawAxiosHeaders> {
  try {
    return await axios('https://bodegadigital.prod.xetid.cu/token');
  } catch (error: any) {
    console.error(`Error occurred while fetching token. Details: ${error.message}`);
    return {};
  }
}
