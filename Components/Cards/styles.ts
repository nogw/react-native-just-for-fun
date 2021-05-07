import styled from 'styled-components/native';

interface IPropsBgc {
  bgc?: string
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
`;

export const Card = styled.View<IPropsBgc>`
  min-height: 180px;
  max-height: 480px;
  width: 100%;

  margin-top: 10px;
  border-radius: 20px;
  background-color: ${props => props.bgc || "#25C685"};

  padding: 30px 30px 60px 30px;
`;

export const ValueText = styled.Text`
`;

export const Column1 = styled.View`
  width: 50%;
  padding: 10px 10px 100px;
`;

export const Column2 = styled.View`
  width: 50%;
  
  padding: 10px 10px 100px 0px;
`;

export const CreatedText = styled.Text`
  position: absolute;
  bottom: 25px;
  left: 30px;
`;