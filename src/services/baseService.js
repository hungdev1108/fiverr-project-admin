import axios from "axios";

import { DOMAIN, TOKEN, TOKEN_CYBER } from "../utils/settings/config";

export class baseService {
  //put method
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        tokenCybersoft: TOKEN_CYBER,
        token: "Bearer " + localStorage.getItem(TOKEN), // JWT
      },
    });
  };

  // post method
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        tokenCybersoft: TOKEN_CYBER, // JWT
        token: localStorage.getItem(TOKEN),
      },
    });
  };

  // get method
  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        tokenCybersoft: TOKEN_CYBER, // JWT
      },
    });
  };

  // delete method
  delete = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        tokenCybersoft: TOKEN_CYBER, // JWT
      },
    });
  };
}
