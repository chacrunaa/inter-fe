const { default: axios } = require("axios");
const { cookieUtils } = require("../utils/cookie.utils");
const { authorizationConstants } = require("../constants/athorization.constants");
const {userAuthToken} = authorizationConstants

axios.interceptors.request.use(function (config) {
    const authToken = cookieUtils.getCookie(userAuthToken);
    /**
     * проверить на других запросах, должен подставляться
     * */ 
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });