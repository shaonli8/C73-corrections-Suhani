import React from 'react';
import { Text, View , StyleSheet , FlatList,ScrollView } from 'react-native';

import {SearchBar,Header} from "react-native-elements";

import * as firebase from 'firebase';
import db from "./config"

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      allStories:[],
      dataSource:[],
      search:''
    }
  }
  retrieveStories=()=>{
    try {
      var allStories=[]
      var stories=db.collection("stories")
      .get().then((querySnapShot)=>{
        querySnapShot.forEach((doc)=>{
          allStories.push(doc.data())
        })
        this.setState({allStories})
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount(){
    this.retrieveStories()
  }

  updateSearch=(search)=>{
    this.setState({search});
  };

  SearchFilterFunction(text){
    const newData=this.state.allStories.filter((item)=>{
    const itemData=item.title? item.title.toUpperCase():"".toUpperCase()
    const textData=text.toUpperCase();
    return itemData.indexOf(textdata)>-1;
    });
    this.setState({
      dataSource:newData,
      search:text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"blue"}
          centerComponent={{
            text:"Bed Time Stories",
            style:{color:"white",fontSize:20}
          }}
          />
          <View styles={{height:20,width:'100%'}}>
             <SearchBar
             placeHolder="Type Here...."
             onChangeText={(text)=> this.SearchFilterFunction(text)}
             onClear={() => this.SearchFilterFunction('')}
             value={this.state.search}
             />
          </View>

          <View>
            <FlatList
              data={this.state.allStories}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Text>Title: {item.title}</Text>
                  <Text>Author : {item.author}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fff'
  },
  item:{
    backgroundColor:"blue",
    padding:10,
    marginVertical:8,
    marginHorizontal:16
  },
  title:{
    fontSize:32
  },
  itemContainer:{
    height:80,
    width:'100%' ,
    borderWidth:2,
    borderColor:"blue",
    justifyContent:'center',
    alignSelf:'center'
  }
})