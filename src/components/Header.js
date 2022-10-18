import styled from "@emotion/styled";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
      <>
<ListaSinOrden>
  <ListItem>
    <Link to="/inicio">
        <TextSinDecoration>Inicio</TextSinDecoration>    
    </Link>
  </ListItem>
  <ListItem>
    <Link to="/busqueda">
        <TextSinDecoration>Busqueda</TextSinDecoration>
    </Link>
  </ListItem>
  <ListItem>
    <Link to="/indice">
        <TextSinDecoration>Indice</TextSinDecoration>
    </Link>
  </ListItem>
  <ListItem>
    <Link to="About">
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
`


const TextSinDecoration = styled.p`
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color:white;
  text-style:bold;
`