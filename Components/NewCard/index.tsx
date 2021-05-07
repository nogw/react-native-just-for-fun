import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Text, Button, Platform, } from 'react-native';
import { Container, Textarea } from './styles';
import InputScrollView from 'react-native-input-scroll-view';
import uuid from 'react-native-uuid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';

function NewCard({ itemId }: any) {
  function useForceUpdate() {
    const [value, setValue] = useState(0);
    return [() => setValue(value + 1), value];
  }
  
  const [inp, setInput] = useState("")
  const [items, setItems] = useState({
    id: "",
    value: "",
    created: "",
  })

  const [size, setSize] = useState(0)
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  let [fontsLoaded] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

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
    db.transaction(
      (tx) => {
        tx.executeSql("select * from items where id = ?", [itemId], 
          (_, { rows }: any) => setInput(rows._array[0].value)
        );
      }
    );
  }, []);
  
  const handleChange = async (text: string) => {
    setInput(text)

    db.transaction(
      (tx: any) => {
        tx.executeSql("UPDATE items SET value = ? WHERE id = ?", 
          [text, itemId], 
          null,
        );
      }
    );
  }

  return (
    <Container>
      <Text>
        {
          items.value
        }
      </Text>
      <InputScrollView>
        <Textarea
          multiline={true}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          onChangeText={(text) => handleChange(text)}
          style={{ fontFamily: 'Poppins' }}
          spellCheck={false}
          autoCorrect={false}
          value={inp}
          autoFocus={true}
        />
      </InputScrollView>
    </Container>
  );
};

export default NewCard;
