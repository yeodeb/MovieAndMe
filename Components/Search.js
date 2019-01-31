// Components/Search.js
 
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from '../Helpers/FilmsData.js'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchText } from '../API/TMDBApi'

class Search extends React.Component {

  _loadFilms() {
     getFilmsFromApiWithSearchText("star").then(data => console.log(data))
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={films}//définir les donnees a recuperer
          keyExtractor={(item) => item.id.toString()}//définir une propriété key sur nos items
          renderItem={({item}) => <FilmItem film={item} />}//Appeler un element de notre item
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
