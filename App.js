import React from "react";
import { StyleSheet, Text, View , Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import WriteStoryScreen from "./WriteStoryScreen";
import ReadStoryScreen from "./ReadStoryScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen: { screen: WriteStoryScreen },
  ReadStoryScreen: { screen: ReadStoryScreen }
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStoryScreen"){
        return(
          <Image
          source={require("./write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStoryScreen"){
        return(
          <Image
          source={require("./read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});