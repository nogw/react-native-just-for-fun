import { Text } from 'react-native';
import { Container } from './styles';

import React, { useEffect } from 'react';
import Bar from '../../Components/Bar';
import Cards from '../../Components/Cards';
import { StatusBar } from 'expo-status-bar';
import NewCard from '../../Components/NewCard';

function Main({ route, navigation }: any) {
  const { itemId } = route.params

  return (
    <Container>
      <NewCard itemId={itemId}/>
      <Bar itemId={itemId} itemName="trash-sharp" navigation={navigation}/>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Main;
