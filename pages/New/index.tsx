import { Text } from 'react-native';
import { Container } from './styles';

import React from 'react';
import Bar from '../../Components/Bar';
import Cards from '../../Components/Cards';
import { StatusBar } from 'expo-status-bar';
import NewCard from '../../Components/NewCard';

function Main({navigation}: any) {
  return (
    <Container>
      <NewCard/>
      <Bar navigation={navigation}/>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Main;
