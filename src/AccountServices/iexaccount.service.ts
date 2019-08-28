import * as dotenv from "dotenv";

import axios from "axios";

const baseURL = "https://cloud.iexapis.com/";

dotenv.config();

//TODO make it so that it accepts either upper or lower case
const sk = process.env.iexcloud_secret_key;

const apiversion = process.env.iexcloud_api_version;

const aToken = `&token=${sk}`;

const qToken = `?token=${sk}`;

const chooseToken = (str:string) => {
  if (str.includes("?")) {
    return aToken
  } else {
    return qToken
  }
}


export const iexApiRequest = (endpoint: string): Promise<any> => {
  const iexRestURL = baseURL + apiversion + endpoint + chooseToken(endpoint);
  // console.log( iexRestURL );
  const result: Promise<any> = axios
    .get(iexRestURL)
    .then(res => res.data);
  return result;
};
