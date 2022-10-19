import apiFetch from "./api-fetch"

export async function getBlogs(){
  const data = await apiFetch("blogs")

  return data;
}