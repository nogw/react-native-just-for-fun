import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { Container, Textarea } from './styles';
import InputScrollView from 'react-native-input-scroll-view';
import { v4 as uuidv4 } from 'uuid';
import Realm from 'realm';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewCard() {
  const [inp, setInput] = useState("")
  const [size, setSize] = useState(0)

  let [fontsLoaded] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  const saveInDb = async () => {
    const TaskSchema = {
      name: "Task",
      properties: {
        _id: "int",
        name: "string",
        status: "string?",
      },
      primaryKey: "_id",
    };

    const realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema],
    });
    
    realm.write(() => {
      realm.create("Task", {
        _id: 1,
        name: "go grocery shopping",
        status: "Open",
      });
    })
  }

  const handleAddTodo = async () => {
    try {
      await saveInDb()
      alert("saved")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container>
      <InputScrollView>
        <Textarea
          multiline={true}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          onChangeText={handleAddTodo}
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
