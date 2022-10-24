import React from 'react';
import styled from "@emotion/styled";
import {Link} from 'react-router-dom';

export default function Header() {
  const [open,  setOpen] = React.useState(false);

  function handleMenuAgrandar(e){
    setOpen(!open);
  }

  return (
      <ContainerHeader>
        <ListaSinOrden2>
          <ListItem2>
            <div onClick={(e)=>handleMenuAgrandar(e)} >
                <TextSinDecoration2 >Menu</TextSinDecoration2>
            </div>
          </ListItem2>  
        </ListaSinOrden2>

        <ListaSinOrden open={open}>
          <ListItem open={open}>
            <Link to="/">
                <TextSinDecoration>Inicio</TextSinDecoration>    
            </Link>
          </ListItem>
          <ListItem open={open}>
            <Link to="/create">
                <TextSinDecoration>Create</TextSinDecoration>
            </Link>
          </ListItem>
          <ListItem open={open}>
            <Link to="/busquedaFront">
                <TextSinDecoration>Busqueda Por Frontend</TextSinDecoration>
            </Link>
          </ListItem>
          <ListItem open={open}>
            <Link to="/busquedaBack">
                <TextSinDecoration>Busqueda Por Backend</TextSinDecoration>
            </Link>
          </ListItem>
          <ListItem  open={open}>
            <Link to="/indice">
                <TextSinDecoration>Indice</TextSinDecoration>
            </Link>
          </ListItem>
          <ListItem open={open}>
            <Link to="/about">
                <TextSinDecoration>Acerca de Nosotros</TextSinDecoration>
            </Link>
          </ListItem>
        </ListaSinOrden>
      </ContainerHeader>
  )
}

const TextSinDecoration2 = styled.p`
  padding: 14px 16px;
  text-decoration: none;
  color:white;
  text-style:bold;
  float: none;
  display: block;
  text-align: left;
`

const ContainerHeader = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

const ListaSinOrden = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: blue;
  color: white;
  @media (max-width: 820px) {
    display: none;    
    ${props => { return  props.open ? ``:`
    display: block;
    float: left;
    `
    }}
  }
`

const ListaSinOrden2 = styled.ul`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: blue;
  color: white; 
  float: right;
  @media (max-width: 820px) {
    display: block;
    
  }
`

const ListItem = styled.li`
  float: left;
  border: 1px solid #bbb;
  text-shadow: 5px 5px 7px red;
  @media (max-width: 820px) {
    ${props => { return  props.open ? ``:`
    display: block;
    float: none;
    `
    }}
 `

 
 const ListItem2 = styled.li`
  float: left;
  display: block;
  background-color: rgb(112,160,240);
  text-shadow: 5px 5px 7px green;
  border-radius: 8px;
 `

const TextSinDecoration = styled.p`
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color:white;
  text-style:bold;
`
