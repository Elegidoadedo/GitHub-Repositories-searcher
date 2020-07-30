import React from 'react';
import { Container, Title, Description, Metadata } from './styles';

export const Card = () => {
  return <Container>
      <Title>
        <a href='https://www.google.es'>Github Repo Sample</a>
      </Title>
      <Description>
        Pues esta es la prueba de texto del repo
      </Description>
      <Metadata>
        Sample de metadata. Update some days ago.
      </Metadata>
    </Container>
}