import axios, { AxiosHeaders } from 'axios';

export async function getToken(): Promise<AxiosHeaders> {
  try {
    const response = await axios('http://localhost:3000/token');
    return response.data;
  } catch (error: any) {
    console.error(`Error occurred while fetching token. Details: ${error.message}`);
    return new AxiosHeaders({});
  }
}
