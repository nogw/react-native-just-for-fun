import { Text, Platform } from 'react-native';
import { Container } from './styles';

import React from 'react';
import Bar from '../../Components/Bar';
import Cards from '../../Components/Cards';
import { StatusBar } from 'expo-status-bar';
import * as SQLite from 'expo-sqlite';

function Main({ route, navigation }: any) {
  function openDatabase() {
    if (Platform.OS === "web") {
      return {
        transaction: () => {
          return {
            executeSql: () => {},
          };
        },
      };
    }
  
    const db = SQLite.openDatabase("db.db");
    return db;
  }
  
  const db = openDatabase();

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id text primary key not null, value text, created text, color text);"
      );
    });
  }, []);


  return (
    <Container>
      <Cards navigation={navigation}/>
      <Bar navigation={navigation}/>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Main;
