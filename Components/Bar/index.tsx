import { Text, TouchableOpacity  } from 'react-native';
import { Container, ButtonIcon } from './styles';

import IonicIcon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import React from 'react';

function Bar({ navigation }: any) {
  return (
    <Container>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} 
      >
        <IonicIcon 
          name="heart" 
          size={28} 
          color="#96a7af" 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('New')} 
      >
        <ButtonIcon>
          <FontAwesomeIcon 
            name="plus" 
            size={32} 
            color="#fff" 
          />
        </ButtonIcon>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} 
      >
        <FontAwesomeIcon 
            name="home" 
            size={28} 
            color="#96a7af" 
        />
      </TouchableOpacity>
    </Container>
  );
};

export default Bar;
