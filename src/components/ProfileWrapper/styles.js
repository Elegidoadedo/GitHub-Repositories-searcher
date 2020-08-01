import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 280px;
  height: auto;
`;

export const Name = styled.h3`
  font-size: 26px;
  line-height: 1.25;
  margin-top: 24px;
`;

export const Alias = styled.h4`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  color: #666;
`;