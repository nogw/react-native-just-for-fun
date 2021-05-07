import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Platform } from 'react-native';
import { Container, Card, Column1, Column2, CreatedText, ValueText } from './styles';
import { useFonts } from 'expo-font';
import { openDatabase } from 'expo-sqlite';
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from "@react-navigation/native";

function Cards({ navigation }: any) {
  const isFocused = useIsFocused();

  const [data, setData] = useState([
    {
      id: "",
      value: "",
      created: "",
      color: ""
    }
  ])

  const [items, setItems] = useState<any>([])

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

  const getData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from items",
        [],
        (_, { rows }: any) => setData(rows._array)
      )}
    )};

  React.useEffect(() => {
    getData()
  }, [isFocused]);

  let [fontsLoaded] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <View/>
  } else {
  return (
    <ScrollView >
      <Container>
        <Column1>
          {
            data
            .filter((_, i) => i % 2 === 0)
            .map((dat, index) => {
              if (dat.id) {
                return <TouchableOpacity 
                  key={index}
                  onPress={() => {
                    navigation.navigate('New', {
                      itemId: dat.id,
                    })
                  }} 
                >
                  <Card bgc={dat.color}>
                    <ValueText style={{ fontFamily: 'Poppins', fontSize: 25, color: "white" }}>
                      {dat.value}
                    </ValueText>
                    <CreatedText style={{ fontFamily: 'Poppins', fontSize: 16, color: "#f1f1f1" }}>
                      {dat.created}
                    </CreatedText>
                  </Card>
                </TouchableOpacity>
              }
            })
          }
        </Column1>
        <Column2>
          {
            data
            .filter((_, i) => i % 2 !== 0)
            .map((dat, index) => {
              if (dat.id) {
                return <TouchableOpacity 
                  key={index}
                  onPress={() => {
                    navigation.navigate('New', {
                      itemId: dat.id,
                    })
                  }} 
                >
                  <Card bgc={dat.color}>
                    <ValueText style={{ fontFamily: 'Poppins', fontSize: 25, color: "white" }}>
                      {dat.value}
                    </ValueText>
                    <CreatedText style={{ fontFamily: 'Poppins', fontSize: 16, color: "#f1f1f1" }}>
                      {dat.created}
                    </CreatedText>
                  </Card>
                </TouchableOpacity>
              }
            })
          }
        </Column2>
    </Container>
  </ScrollView>
);
}
};

export default Cards;
