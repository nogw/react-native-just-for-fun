import { Text } from 'react-native';
import { Container } from './styles';

import React from 'react';
import Bar from '../../Components/Bar';
import Cards from '../../Components/Cards';
import { StatusBar } from 'expo-status-bar';

function Main({ navigation }: any) {
  return (
    <Container>
      <Cards/>
      <Bar navigation={navigation}/>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Main;
