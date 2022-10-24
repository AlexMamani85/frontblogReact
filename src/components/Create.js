// import styled from "@emotion/styled";
import React from 'react';
import styled from "@emotion/styled";
import * as blogService from '../context/blogs-services';

import Header from '../components/Header'


export default function Create() {
  const [values, setValues] = React.useState([])

  const handleChange = (e) => {
    if (e.target.name === 'titleinput') {
      setValues([...values, {titleinput: e.target.value}])
    }

    if (e.target.name === 'bodyinput') {
      setValues([...values, {bodyinput: e.target.value}])
    }

    if (e.target.name === 'authorinput') {
      setValues([...values, {authorinput: e.target.value}])
    }
    console.log(values);
  }
  
  const handleSubmit = async(e, values) => {
      e.preventDefault();
      console.log(values);
      blogService.postNewBlog(values);
  }

  return (
        <>        
        <Header></Header>
          <Form action="#">
            <FormWrapper>
              <FormTable>
                <TableBody>
                  <TableRow>
                    <TableDataForLabelInput>
                      <Label htmlFor="fname">Título:</Label>
                    </TableDataForLabelInput>
                    <TableDataForInput>
                      <Input placeholder="...Type the title param" key="titleinput" name="titleinput" type="text" value={values.titleinput} onChange={(e)=>handleChange(e)}/>
                    </TableDataForInput>                  
                  </TableRow>

                  <TableRow>
                    <TableDataForLabelInput>
                      <Label htmlFor="fname">Autor:</Label>
                    </TableDataForLabelInput>
                    <TableDataForInput>
                      <Input placeholder="...Type the author param" name="authorinput" key="authorinput" type="text" value={values.authorinput} onChange={(e)=>handleChange(e)}/>
                    </TableDataForInput>
                  </TableRow>
                  <TableRow>
                    <TableDataForLabelInput>
                      <Label htmlFor="fname">Body:</Label>
                    </TableDataForLabelInput>
                    <TableDataForInput>
                      <BodyInput placeholder="...Type the body param" name="bodyinput" key="bodyinput" type="text" value={values.bodyinput} onChange={(e)=>handleChange(e)}/>
                    </TableDataForInput>
                  </TableRow>
                </TableBody>




              </FormTable>
              <ButtonContainer>
                    <Button onSubmit={(e)=>handleSubmit(e, values)} >Create a new Blog</Button>
                  </ButtonContainer>
            </FormWrapper>
          </Form>

        </>
  )
}

const TableBody = styled.tbody`
`;

const ButtonContainer = styled.div`
  padding: 16px;
  width:100%;
  border: red 1px solid;
`;
const Button = styled.button`
  border-radius: 10px;
  @media (max-width: 800px) {
    color: red;
  }
`;

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

const FormTable = styled.table`
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



const BodyInput = styled.input`
  height:100px;
  width:100%;
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



const TableRow = styled.tr`
&:nth-of-type(even) {
  background-color: lightblue;
}
`;


