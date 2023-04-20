import axios from "axios";

export function MakeRequest(wso2EndPoint, nextEndPoint, method, body, params) {
  let data = {
    method: method,
    params: params,
    url: wso2EndPoint,
    data: body,
  };
  const options = {
    method: "post",
    url: nextEndPoint,
    data: data,
  };
  return getService(options);
}

async function getService(options) {
  console.log("GetServiceOptions", options);
  try {
    const response = await axios.request(options);
    console.log("GetServiceResponse", response);
    return response.data || response;
  } catch (error) {
    console.error(error);
    return error;
  }
}
