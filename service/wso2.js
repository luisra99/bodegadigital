import axios from "axios";

export async function getData({ key, api, action, method, params, data }) {
  let result = [];
  let token = await getToken(key);
  let urlParams = "";
  if (Object.keys(params).length !== 0) {
    urlParams = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
  }
  urlParams = action.includes("?") ? `&${urlParams}` : `?${urlParams}`;

  console.log("Params", urlParams);
  ////console.log('tokenn',token);
  if (token) {
    let config = process.env.WSO2[key];
    let access_token = token.access_token;
    let dir =
      config.GW_PROTOCOL +
      "://" +
      config.GW_IP +
      (config.GW_PORT ? ":" + config.GW_PORT : "");
    let dir_api =
      dir + config[api] + action + (urlParams != "" ? urlParams : "");
    //console.log("dirapi", dir_api);
    let headers = {
      Authorization: `Bearer ${access_token}`,
      "Access-Control-Allow-Origin": "*",
    };
    if (method == "post" || method == "put") {
      headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    console.table([key, api, action, method, dir_api, data]);
    console.log("dataservice", data),
      (result = await axios({
        method: method,
        url: dir_api,
        headers: headers,
        params: params,
        data: data,
      })
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          return [];
        }));
  }
  return result;
}

export async function getToken(key) {
  let data = [];
  let config = process.env.WSO2[key];
  if (config) {
    const basic = Buffer.from(
      config.AM_CONSUMER_KEY + ":" + config.AM_CONSUMER_SECRET
    ).toString("base64");
    let dir =
      config.AM_PROTOCOL +
      "://" +
      config.AM_IP +
      (config.AM_PORT ? ":" + config.AM_PORT : "");
    let dir_token = dir + config.AM_TOKEN_ENDPOINT;
    data = await axios({
      method: "post",
      url: dir_token,
      headers: {
        Authorization: `Basic ${basic}`,
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        grant_type: "client_credentials",
      },
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        //console.log(error);
        return [];
      });
  }
  return data;
}
