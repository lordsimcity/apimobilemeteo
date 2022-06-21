import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.searchedText = '' // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: [],
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      // Seulement si le texte recherché n'est pas vide
      getFilmsFromApiWithSearchedText(this.searchedText).then((data) => {
        this.setState({ films: data.results })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par setState
  }

  render() {
    //console.log('RENDER')
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title="Rechercher" onPress={() => this._loadFilms()} />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    )
  }
}

export default Search