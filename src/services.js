import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const createPost = async (postData) => {
  try {
    const response = await axios.post(`${backendUrl}/api/posts`, postData);

    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export { createPost };
