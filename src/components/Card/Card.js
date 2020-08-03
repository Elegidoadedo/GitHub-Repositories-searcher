import React from 'react';
import { Container, Title, Description, Metadata } from './styles';

export const Card = ({title, description, metadata, url}) => {
  return <Container>
      <Title>
        <a href={url}>{title}</a>
      </Title>
      <Description>
        {description}
      </Description>
      <Metadata>
        Last update {metadata}
      </Metadata>
    </Container>
}