// import styled from "@emotion/styled";
import React from 'react'
import styled from "@emotion/styled";
import Header from '../components/Header'
export default function About() {

  return (
      <>
        <Header></Header>
        <Wrapper>
          <H1>
            SOBRE NOSOTROS
          </H1>
          <Paragraph>
            Lo ayudamos a lanzar, administrar y hacer crecer su negocio en línea. Le brindamos revisiones honestas, imparciales, sin complicaciones y actualizadas de algunas de las herramientas y servicios más populares que existen.
          </Paragraph>
          <Paragraph>
            En este sitio, puede esperar encontrar reseñas honestas, precisas y actualizadas de expertos que realmente han utilizado los servicios de las empresas sobre las que escriben y reseñan.
          </Paragraph>  
          <Paragraph>
            Divulgación: Nuestro sitio es compatible con el lector. Cuando compra un servicio o un producto a través de nuestros enlaces, a veces ganamos una comisión de afiliado.
          </Paragraph>
        </Wrapper>
      </>
  );
}

const Wrapper = styled.div`
  margin:16px;
  padding: 16px;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  height:80%;
  width:80%;

`;


const H1 = styled.h1`
  margin: 16px;
`;

const Paragraph = styled.p`
  padding: 16px;
  text-align: justify;
`;
