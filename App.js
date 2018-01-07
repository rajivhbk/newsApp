import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import SwipeView from './App/Components/SwipeView';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        primaryDark: color('tomato').darken(0.2).rgb().string(),
        accent: 'yellow',
    },
};

export default class App extends React.Component {
  render() {
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <SwipeView />
            </View>
        </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
