import axios from "axios";
import API_TOKEN from "../env";
import React from "react";
import { Button, FlatList, TextInput, View } from "react-native";
 
class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      getPostal: '',
    }
  }

  postPostalCodeSearch() {
       axios
      .get(
        'https://api.meteo-concept.com/api/location/city?token=' +
        API_TOKEN +
        '&insee=' +
          this.state.getPostal
      )
      .then(function (response) {
        if (response) {
          alert(
            'Voici les infos pour le numéro INSEE '+
              JSON.stringify(response.data)
          )
        } else {
          alert(
            'Le numéro INSEE n\'existe pas'
          )
        }
      })
  }
 
  render(){
    return(
    <View>
      <TextInput
        placeholder="Code postal"
        value={this.state.getPostal}
        onChange={e => this.setState({getPostal: e.target.value})}
      />

      <Button title="Rechercher" onPress={()=>this.postPostalCodeSearch()}/>
      <FlatList  />
    </View>
  )}
}

export default Search