import React from "react";import { createStackNavigator } from '@react-navigation/stack';import {useSelector} from "react-redux";import ChooseLang               from "../components/ChooseLang";import Intro 					from "../components/Intro";import Login                    from "../components/Login";import ForgetPass 				from "../components/ForgetPass";import ResetPass 				from "../components/ResetPass";import Register 				from "../components/Register";import ActivationCode 			from "../components/ActivationCode";// import { MainStackNavigator }   from './MainStackNavigator'const AuthStack = createStackNavigator();export function AuthStackNavigator()  {	const lang = useSelector(state => state.lang.lang);	return(		<AuthStack.Navigator mode={'modal'} screenOptions={{headerShown: false}}>			{ lang == null ? <AuthStack.Screen name="chooseLang" component={ChooseLang} /> : null }			{/*<AuthStack.Screen name="chooseLang" component={ChooseLang} />*/}			<AuthStack.Screen name="intro" component={Intro} />			<AuthStack.Screen name="login" component={Login} />			<AuthStack.Screen name="forgetPass" component={ForgetPass} />			<AuthStack.Screen name="resetPass" component={ResetPass} />			<AuthStack.Screen name="register" component={Register} />			<AuthStack.Screen name="activationCode" component={ActivationCode} />			{/*<AuthStack.Screen name="MainStack" component={MainStackNavigator} />*/}		</AuthStack.Navigator>	);}