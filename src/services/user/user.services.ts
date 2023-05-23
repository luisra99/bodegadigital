// import { ProfileContent } from '@/shared/interfaces/common';

// import { isConfig_seed, profile_seed, infoNucleo_seed } from '../../seed';

import axios from 'axios';

// const api = import.meta.env.VITE_BODEGA_ENDPOINT;
// const claim_api = import.meta.env.VITE_BODEGA_CLAIM;
// const profile_api = import.meta.env.VITE_BODEGA_PROFILE;

export async function SetProfileConfiguration(params: any) {
  try {
    const { values } = params;
    const response = await axios.post(`http://localhost:3000/profile`, values);

    return response;
  } catch (error) {
    return {
      status: 500,
      error: error,
    };
  }
}
export async function GetProfileConfiguration(params?: any) {
  try {
    // const { username } = params;
    // Real Service
    const response = (await axios.get(`http://localhost:3000/profile`));
    const { isConfig, profile, nucleo } = response.data
    return { isConfig, profile, nucleo };
  } catch (error) {
    console.error('Error consuming API', error);
  }
}
export function UpdateProfileConfiguration(params: any) {
  return;
}
export function ReclaimRegistration(setState: (value: any) => void, ci: string) {
  setState(false);
  console.log(ci);
  // axios.post(api + claim_api, ci).then((result: any) => {
  //   setState(true);
  //   return result;
  // });
  setTimeout(() => setState(true), 5000);
}
