import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Description, Footer } from './styles';

export const Card = ({title, description, updatedAt, url}) => {
  return <Container>
      <Title>
        <a href={url}>{title}</a>
      </Title>
      <Description>
        {description}
      </Description>
      <Footer>
        Last update {updatedAt}
      </Footer>
    </Container>
}

Card.propTypes = {
  /** Repository title */
  title: PropTypes.string.isRequired,
  /** Repository description */
  description: PropTypes.string,
  /** Repository last update */
  updatedAt: PropTypes.string,
  /** Repository URL */
  url: PropTypes.string.isRequired,
}

Card.defaultProps = {
  description: '',
  metadata: '',
}