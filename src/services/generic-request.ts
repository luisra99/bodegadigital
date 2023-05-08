import { RequestOptions, RequestData } from '@interfaces/request-interface';

import axios from 'axios';

export function MakeRequest(
  wso2EndPoint: string,
  nextEndPoint: string,
  method: string,
  body: object,
  params: object,
) {
  const data: RequestData = {
    method,
    params,
    url: wso2EndPoint,
    data: body,
  };
  const options: RequestOptions = {
    method: 'post',
    url: nextEndPoint,
    data,
  };
  return getService(options);
}

async function getService(options: object) {
  console.log('GetServiceOptions', options);
  try {
    const response = await axios.request(options);
    console.log('GetServiceResponse', response);
    return response.data || response;
  } catch (error) {
    console.error(error);
    return error;
  }
}
