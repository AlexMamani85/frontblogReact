// import styled from "@emotion/styled";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import * as blogService from '../context/blogs-services';
import { useParams } from 'react-router-dom';

import Header from './Header'


export default function BusquedaBack() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = React.useState([])
  const [query, setQuery] = React.useState('')
  const [state, setstate] = React.useState({
    query: '',
    list: []
  })
  const { words } = useParams();

  React.useEffect(() => {
    console.log(words);
    blogService.getBlogByWORDS(words)
      .then(data => {
        setBlogs(data);
        console.log(data);
      })
      .catch(console.log)
  },[])

  const handleChange = (e) => {
    setQuery(e.target.value)
    
    setstate({
      query: e.target.value,
      list: blogs
  })
  navigate(`/busquedaBack/${e.target.value}`)
    
  }
  

  return (
        <>        
        <Header></Header>
          <Form>
            <FormWrapper>
              <TableInput>
                <TableRow>
                  <TableDataForLabelInput>
                    <Label htmlFor="fname">Busqueda Por Título:</Label>
                  </TableDataForLabelInput>
                  <TableDataForInput>
                    <Input placeholder="Type the query param" name="fname" type="search" value={query} onChange={handleChange}/>
                  </TableDataForInput>
                </TableRow>
              </TableInput>
            </FormWrapper>
          </Form>


        <Table>
        <TableRowTitle>
          <TableHeader>Título</TableHeader>
          <TableHeader>Contenido</TableHeader>
        </TableRowTitle>        
          { !!words &&
          blogs.map(post => {return (
            <>
            <TableRow>
            <TableData>{post.title}</TableData>
            <TableData>{post.body}</TableData>
            </TableRow>
            </>
            )
          })}
          


          </Table>
        </>
  )
}

const FormWrapper = styled.div`
  border-radius: 8px;
  background-color:lightblue;
  color:white;
  font-weight: bold;
`;

const Form = styled.form`
  padding: 32px 0px 0px 0px;
  width: 60%;

  left: 0;
  right: 0;
  margin: 0 auto;
`;

const TableInput = styled.table`
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
`;

const TableDataForLabelInput = styled.td`
`;
const TableDataForInput = styled.td`
`;

const Label = styled.label`
  color:darkorange;
  filter:drop-shadow(1px 1px 5px #D2B288);

`;

const Input = styled.input`
  border: blue 1px solid;
  border-radius: 8px;
  &:focus {
  outline: none;
  border: blue 2px solid;
  }
  ::placeholder {
  color: lightgray;
  font-style: italic;
}
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

