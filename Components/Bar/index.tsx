import { Text, TouchableOpacity, Platform  } from 'react-native';
import { Container, ButtonIcon, HomeIcon, DeleteIcon } from './styles';

import IonicIcon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import React, { useState } from 'react';
import * as SQLite from "expo-sqlite";
import uuid from 'react-native-uuid';
import dayjs from 'dayjs';
import { useIsFocused } from "@react-navigation/native";

interface IBarProps {
  navigation: any,
  itemName?: string,
  itemId?: string
}

function Bar({ navigation, itemName, itemId }: IBarProps) {
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
  const [id, setId] = useState(uuid.v4())
  const [isFavorite, setIsFavorite] = useState(0)
  const isFocused = useIsFocused();
  const colors = [
    "#FF575F",
    "#FF974A",
    "#FFC542",
    "#3DD598",
    "#0062FF",
    "#755FE2",
  ]

  const saveInDb = async () => {
    setId(uuid.v4())
    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (id, value, created, color) values (?, ?, ?, ?)", [id, "", dayjs().format('DD/MM/YYYY'), colors[Math.floor(Math.random() * colors.length)]]);
      }
    );
  }

  const deleteThisNote = () => {
    db.transaction(
      (tx) => {
        tx.executeSql("delete from items where id = ?", [itemId])
      }
    )
  }

  return (
    <Container>
      {
        itemName === "trash-sharp" ? (
          <DeleteIcon>
            <TouchableOpacity 
              onPress={() => {
                navigation.navigate('Home')
                deleteThisNote()
              }} 
            >
              <IonicIcon 
                name={itemName} 
                size={28} 
                color="#96a7af" 
              />
            </TouchableOpacity>
          </DeleteIcon>
        ) : (
          <TouchableOpacity 
            onPress={() => {
              navigation.navigate('New', {
                itemId: id,
              })
              saveInDb()
            }} 
          >
            <ButtonIcon>
              <FontAwesomeIcon 
                name="plus" 
                size={32} 
                color="#fff" 
              />
            </ButtonIcon>
          </TouchableOpacity>
        )
      }

      {
        itemName !== "trash-sharp" ? (
          <HomeIcon>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')} 
            >
              <FontAwesomeIcon 
                name="home" 
                size={28} 
                color="#96a7af" 
              />
            </TouchableOpacity>
          </HomeIcon>
        ) : (
          <ButtonIcon>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')} 
            >
              <FontAwesomeIcon 
                name="home" 
                size={28} 
                color="#fff" 
              />
            </TouchableOpacity>
          </ButtonIcon>
        )
      } 
    </Container>
  );
};

export default Bar;
