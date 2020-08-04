import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  metadata: PropTypes.string,
  url: PropTypes.string.isRequired,
}

Card.defaultProps = {
  description: '',
  metadata: '',
}