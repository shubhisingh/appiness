import React, { Component } from 'react';
import Dashboard from './src/components/EmployeeList';
import {Provider} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import store from './src/store';
import Login from './src/components/Login';
// import Employeelist from './App/appiness/employeelist';

const AppStack = StackNavigator({
	Login :{
		screen: Login,
		navigationOptions: {
			title: "Login",
			header: null,
			gesturesEnabled: false,
		}
	},
	Dashboard:{
		screen: Dashboard,
		navigationOptions:{
			title: "Dashboard",
			header: null,
			gesturesEnabled: false,
		}
	},
},

{
	initialRouteName: 'Login',
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state =  {};
		const { navigation } = this.props;
	}

	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppStack />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	icon: {
		paddingLeft: 10
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
