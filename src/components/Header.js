import styled from "@emotion/styled";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
      <>
<ListaSinOrden>
  <ListItem>
    <Link to="/">
        <TextSinDecoration>Inicio</TextSinDecoration>    
    </Link>
  </ListItem>
  <ListItem>
    <Link to="/create">
        <TextSinDecoration>Create</TextSinDecoration>
    </Link>
  </ListItem>
  <ListItem>
    <Link to="/busquedaFront">
        <TextSinDecoration>Busqueda Por Frontend</TextSinDecoration>
    </Link>
  </ListItem>
  <ListItem>
    <Link to="/busquedaBack">
        <TextSinDecoration>Busqueda Por Backend</TextSinDecoration>
    </Link>
  </ListItem>
  <ListItem>
    <Link to="/indice">
        <TextSinDecoration>Indice</TextSinDecoration>
    </Link>
  </ListItem>
  <ListItem>
    <Link to="/about">
        <TextSinDecoration>Acerca de Nosotros</TextSinDecoration>
    </Link>
  </ListItem>
</ListaSinOrden>
      </>
  )
}


const ListaSinOrden = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: blue;
  color: white;
`

const ListItem = styled.li`
float: left;
display: block;
border-right: 1px solid #bbb;
text-shadow: 5px 5px 7px red;
`


const TextSinDecoration = styled.p`
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color:white;
  text-style:bold;
`