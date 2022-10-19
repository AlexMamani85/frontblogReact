// import styled from "@emotion/styled";
import React from 'react'
import * as blogService from '../context/blogs-services'



export default function Indice() {
  const [blogs, setBlogs] = React.useState([])
  
  React.useEffect(() => {
    blogService.getBlogs()
      .then(data => {
        setBlogs(data)
      })
      .catch(console.log)
  },[])


  return (
      <table>
        <tr>
          <th>Título</th>
          <th>Contenido</th>
        </tr>
        {blogs.map(x=>
        (
          <tr>
          <td><p>{x.title}</p></td>
          <td><p>{x.body}</p></td>
          </tr>
          ))}
      </table>
  )
}

