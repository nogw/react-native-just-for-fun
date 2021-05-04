import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Container, Card, Column1, Column2 } from './styles';
import { useFonts } from 'expo-font';

function Cards() {
  const [data, setData] = useState([
    {
      color: "#FF464F",
      text: "I'm nearing the end of my fourth year"
    },
    {
      color: "#FF8A34",
      text: "I feel like I've been lacking crying too many tears"
    },
    {
      color: "#FFBC25",
      text: "teste teste teste teste teste teste teste teste teste teste teste"
    },
    {
      color: "#25C685",
      text: "Everyone seemed to say it was so great, but did I miss out"
    },
    {
      color: "#755FE2",
      text: "I can't help the fact I like to be alone"
    },
    {
      color: "#FF8A34",
      text: "It might sound kinda sad, but that's just what I seem to know"
    },
    {
      color: "#FFBC25",
      text: "I guess I thought that prom was gonna be fun but now I'm sitting on the floor and all I wanna"
    },
    {
      color: "#25C685",
      text: "I keep to myself, though I want to break"
    },
    {
      color: "#755FE2",
      text: "I keep colections of masks upon my wall"
    },
  ])

  let [fontsLoaded] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  const [list1, setList1] = useState([{}])
  const [list2, setList2] = useState([{}])
   
  useEffect(() => {
    if (data.length > 1) {
      var halfwayThrough = Math.ceil(data.length / 2);    
      let arrayFirstHalf = data.slice(0, halfwayThrough);
      let arraySecondHalf = data.slice(halfwayThrough, data.length)
      setList1(arrayFirstHalf)
      setList2(arraySecondHalf)
    }
  }, [])

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
              return <Card key={index} bgc={dat.color}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 25, color: "white" }}>{dat.text}</Text>
              </Card>
            })
          }
        </Column1>
        <Column2>
          {
            data
            .filter((_, i) => i % 2 !== 0)
            .map((dat, index) => {
              return <Card key={index} bgc={dat.color}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 25, color: "white" }}>{dat.text}</Text>
              </Card>
            })
          }
        </Column2>
    </Container>
  </ScrollView>
);
}
};

export default Cards;
