// import styled from "@emotion/styled";
import React from 'react'
import styled from "@emotion/styled";
import * as blogService from '../context/blogs-services'

import Header from '../components/Header'

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
      <>
        <Header></Header>
        <Table>
          <TableHead>
            <TableRowTitle>
              <TableHeader>Título</TableHeader>
              <TableHeader>Contenido</TableHeader>
            </TableRowTitle>
          </TableHead>
          <TableBody>
            {blogs.map(x=>
            ( 
              <TableRow key={x.id}>
                <TableData>{x.title}</TableData>
                <TableData>{x.body}</TableData>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </>
  )
}

const TableHead = styled.thead`
`;

const TableBody = styled.tbody`
`;

const Table = styled.table`
  padding: 32px;
  width: 70%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const TableRowTitle = styled.tr`
  background-color: darkblue;
  color: white;
`;

const TableRow = styled.tr`
&:nth-of-type(even) {
  background-color: lightblue;
}
`;

const TableHeader= styled.th`
border: 1px solid;
padding: 16px;
`
const TableData= styled.td`
border: 1px solid lightgray;
padding: 16px;
`
