import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SubjectList({data}) {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFFF', fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>Titulo: <Text style={{color: '#ffff', fontSize: 17, fontWeight: 'normal'}}>{data.title}</Text></Text>
      <Text style={{color: '#FFFF', fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>Autor: <Text style={{color: '#ffff', fontSize: 17, fontWeight: 'normal'}}>{data.author}</Text></Text>
      <Text style={{color: '#FFFF', fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>Ano: <Text style={{color: '#ffff', fontSize: 17, fontWeight: 'normal'}}>{data.year}</Text></Text>
      <Text style={{color: '#FFFF', fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>Genero: <Text style={{color: '#ffff', fontSize: 17, fontWeight: 'normal'}}>{data.genre}</Text></Text>
      <Text style={{color: '#FFFF', fontSize: 17, fontWeight: 'bold', marginBottom: 10}}>ISBN: <Text style={{color: '#ffff', fontSize: 17, fontWeight: 'normal'}}>{data.isbn}</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#5e365a',
    borderRadius: 4
  }
})