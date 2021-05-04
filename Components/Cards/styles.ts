import styled from 'styled-components/native';

interface IPropsBgc {
  bgc: string
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
`;

export const Card = styled.View<IPropsBgc>`
  min-height: 180px;
  width: 100%;

  margin-top: 10px;
  border-radius: 20px;
  background-color: ${props => props.bgc};

  padding: 30px;
`;

export const Column1 = styled.View`
  width: 50%;
  padding: 10px 10px 100px;
`;

export const Column2 = styled.View`
  width: 50%;
  
  padding: 10px 10px 100px 0px;
`;
