import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #30444e;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  
  position: absolute;
  bottom: 0;
  
  width: 100%;
  height: 90px;

  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: #3dd598;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
`;

export const HomeIcon = styled.View`
  margin-left: 40px;
`;

export const DeleteIcon = styled.View`
  margin-right: 40px;
`;