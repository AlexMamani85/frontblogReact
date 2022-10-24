import apiFetch from "./api-fetch"

export async function getBlogs(){
  const data = await apiFetch("blogs")

  return data;
};

export async function getBlogByWORDS(words){
  const data = await apiFetch("busqueda/"+words)
  return data;
};

export async function postNewBlog(body){
  return await apiFetch("/blogs", { body: body }).then((u) => {
    console.log(u);
    const { result } = u;
    // sessionStorage.setItem(tokenKey, token);
    if (result) {return "Blog Created";}
    else {return "Blog Not Created";}
  }).catch((err)=>console.log(err));
}