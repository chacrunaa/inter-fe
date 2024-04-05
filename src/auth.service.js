import axios from "axios";
import { cookieUtils } from "./utils/cookie.utils";
import { authorizationConstants } from "./constants/athorization.constants";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const {userAuthToken} = authorizationConstants

const authorizateUser = async () => {
  const authData = {
    "email": "firstrEmfdfwail@example.com",
    "password": "322334323RWW"
  }
  try {
    const response = await axios.post(`${backendUrl}/auth/login`, authData);
    cookieUtils.setCookie(userAuthToken, response.data.token, '1')
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const authService = { authorizateUser };
