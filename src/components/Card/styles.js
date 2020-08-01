import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #e1e4e8
  `;

export const Title = styled.h3`
  & a{
    color: #0366d6;
    text-decoration: none;
  }
`;

export const Description = styled.p`
  color: #586069;
  font-size: 14px;
  line-height: 1.5;
`;

export const Metadata = styled(Description)`
  font-size: 12;
  margin-top: 8px;
`;