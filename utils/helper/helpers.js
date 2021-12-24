import axios from "axios";

export const getDomain = (path) => {
  // will change when update on run production which real domain
  return `${process.env.NEXT_PUBLIC_DOMAIN}${path}`;
};

export const postRecommend = async (params) => {
  console.log(params);
  try {
    const res = await axios.post(
      "https://recap.longvb.tech/caption_image_recommendation/recommend",
      params,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    const data = await res.data;
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
