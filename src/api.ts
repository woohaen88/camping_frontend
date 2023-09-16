import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  withCredentials: true,
});

export function getCampgroundALL() {
  return instance.get("campgrounds/").then((response) => response.data);
}

export async function PostCreateEx4() {
  const headers = {
    id: inputUserId,
    version: "1.1",
  };
  const response = await axios.post(
    //        'http://localhost:8000/todo/create',{
    "/todo/create",
    {
      user_id: inputUserId,
      name: inputName,
    },
    { headers }
  );
  return response.data;
}
