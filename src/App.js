import { StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  View,
  Alert,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Card from './components/card/Index';

const imageProfile = 'https://avatars.githubusercontent.com/u/70589176?v=4';

export default function App() {

  function handleRedeSocial(redeSocial) {
    switch(redeSocial) {
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/nicoferca')
        break
      case 'github':
        Alert.alert('Meu GitHub','https://www.github.com/nicofercavv-dev')
        break
      case 'instagram':
        Alert.alert('Meu Instagram','https://www.instagram.com/nicoferca')
        break
    }
  }

  return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <StatusBar backgroundColor={'#e7e7e7'} barStyle={'dark-content'}></StatusBar>
          <View style={style.cabecalho}>
            <Image style={style.imagem} source={{uri: imageProfile}}></Image>
            <Text style={style.nome}>NICOLE FERREIRA</Text>
            <Text style={style.funcao}>Desenvolvedora Front-end/Mobile</Text>
            <View style={style.redesSociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name='github' size={30}></Icon>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
                <Icon name='instagram' size={30}></Icon>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                <Icon name='linkedin' size={30}></Icon>
              </TouchableOpacity>
            </View>
          </View>
          <Card titulo='Formação Acadêmica'>
            <Text style={style.cardContentText}>Graduação em Engenharia de Software - Unicesumar (2022-presente)</Text>
            <Text style={style.cardContentText}>Técnico em Automação Industrial integrado ao Ensino Médio - IFMA (2018-2021)</Text>
          </Card>
          <Card titulo='Cursos Complementares'>
            <Text style={style.cardContentText}>Produtividade (Pacote Office)</Text>
            <Text style={style.cardContentText}>Comunicação e Expressão</Text>
            <Text style={style.cardContentText}></Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  cabecalho: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: '#939393'
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20
  },
  cardContentText: {
    color: '#939393',
    marginBottom: 10,
    textAlign: 'justify',
  marginLeft: 5
  }
});
