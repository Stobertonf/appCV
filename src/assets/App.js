import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/smfLogo.jpg';
import Card from './components/Card';

const App = () => {


  function handleRedeSocial(rede_social) {

    switch (rede_social) {

      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/stoberton-francisco/');
        break;
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/Stobertonf');
        break;
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/stoberton.murilo/');
        break;

    }

  }

  return (
    <>
      <View style={style.page}>

        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Stoberton Frnacisco</Text>
          <Text style={style.funcao}>Mobile Developer FLutter</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>

          </View>
        </View>

        <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>FMU</Text>
          <Text style={style.card_content_text}>Ka Solution</Text>
          <Text style={style.card_content_text}>Udemy</Text>
        </Card>
        <Card titulo="Experiencias Profissional">
          <Text style={style.card_content_text}>PullUp Tech</Text>
          <Text style={style.card_content_text}>Grupo Sim</Text>
          <Text style={style.card_content_text}>SMF Systems Technology</Text>
        </Card>
        <Card titulo="Tecnologias que mais Gosto">
          <Text style={style.card_content_text}>Dart</Text>
          <Text style={style.card_content_text}>Flutter</Text>
          <Text style={style.card_content_text}>Dart e Flutter</Text>
        </Card>

      </View>
    </>
  );
};


const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});


export default App