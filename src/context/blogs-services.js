import apiFetch from "./api-fetch"

export async function getBlogs(){
  const data = await apiFetch("blogs")

  return data;
};

export async function getBlogByWORDS(words){
  const data = await apiFetch("busqueda/"+words)
  return data;
}