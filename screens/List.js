  
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator, TouchableHighlight, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebaseConnection';
import SubjectList from '../../components/SubjectList';

export default function List() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function getListData() {
      await firebase.database().ref('books').on('value', (snapshot) => {
        setSubjects([]);

        snapshot.forEach((childItem) => {
          let data = {
            key: childItem.key,
            bookTitle: childItem.val().title,
            author: childItem.val().author,
            year: childItem.val().year,
            genre: childItem.val().genre,
            isbn: childItem.val().isbn
          };
          setBooks(oldArray => [...oldArray, data].reverse());
        });
        setLoading(false);
      });
    }
    getListData();
  }, []);

  async function register() {
    if (subjectName != '' & course != '' & objective != '' & teacher != '' & workload != '') {
      let subjects = await firebase.database().ref('subjects');
      let key = subjects.push().key;

      subjects.child(key).set({
        bookTitle: title,
        author: author,
        year: year,
        genre: genre,
        isbn: isbn
      });

      setSubjectName('');
      setCourse('');
      setObjective('');
      setTeacher('');
      setWorkload('');
    }
    else {
    }
  }

  async function logout() {
    await firebase.auth().signOut();
    navigation.navigate('Homepage');
    alert('Deslogado com sucesso!');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setTitle(text)}
          value={subjectName}
          placeholder="Digite o título"
        />

        <Text style={styles.text}>Autor</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setAuthor(text)}
          value={course}
          placeholder="Digite o nome do autor"
        />

        <Text style={styles.text}>Ano</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setYear(text)}
          value={objective}
          placeholder="Digite o ano"
        />

        <Text style={styles.text}>Genero</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setGenre(text)}
          value={teacher}
          placeholder="Digite o gênero"
        />

        <Text style={styles.text}>ISBN</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setIsbn(text)}
          value={workload}
          keyboardType="numeric"
          placeholder="Digite o ISBN"
        />

        <View style={styles.viewButton}>
          <TouchableHighlight
            onPress={register}
            style={styles.button}
          >
            <Text style={{ color: '#FFFF', fontWeight: 'bold', fontSize: 18 }}>Cadastrar</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={logout}
            style={styles.button}
          >
            <Text style={{ color: '#FFFF', fontWeight: 'bold', fontSize: 18 }}>Sair</Text>
          </TouchableHighlight>
        </View>

        {
          loading ?
            (
              <ActivityIndicator color="#121212" size={45} />
            )
            :
            (
              <FlatList
                keyExtractor={item => item.key}
                data={subjects}
                renderItem={({ item }) => (<SubjectList data={item} />)}
              />
            )
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#121212',
    height: 45,
    fontSize: 17,
    borderRadius: 4
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a858a0',
    width: 200,
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10
  },
  viewButton: {
    alignItems: 'center'
  }
});
