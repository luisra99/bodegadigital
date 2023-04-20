import { getData } from "../../src/service/wso2";

export default function handler(req, res) {
  const { url, data, params, method } = req.body;
  // console.log("handlre", req.body);
  let wso2Params = {
    key: "APIM_MTZ",
    api: "API_Norma_ENDPOINT",
    method: (method || req.method).toLowerCase(),
    params: params,
    action: url,
    data: data,
  };
   gatdatos(wso2Params,res);
}
async function gatdatos(params,res) {
  let data = await getData(params);
  res.status(200).json(data);
}
