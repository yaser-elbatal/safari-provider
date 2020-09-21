import React , {useState} from "react";import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';import {View, Text, TouchableOpacity, Image, ImageBackground, I18nManager, Dimensions,} from 'react-native'import { Container, Content } from 'native-base'import i18n from "../../locale/i18n";import {useSelector} from "react-redux";const width		 = Dimensions.get('window').width;const height	 = Dimensions.get('window').height;export function CustomDrawer(props) {	// const user = useSelector(state => state.auth.user ? state.auth.user.data :  {name: null});	const user = {name: null};	return (		<ImageBackground source={require('../../assets/images/menu_bg.png')} style={{ width, height,}} resizeMode={'cover'}>			<DrawerContentScrollView {...props}>				<View style={{ flexDirection: 'row', width: '100%', marginBottom: 25}}>					<View>						<ImageBackground source={require('../../assets/images/shape.png')} style={{ width: 280, height: 280, marginTop: -55, marginLeft: -30, transform: I18nManager.isRTL ? [{rotateY : '0deg'}] : [{rotateY : '-180deg'}] }} resizeMode={'contain'}>							<View style={{ backgroundColor: '#fff', width: 200, height: 200, borderRadius: 120, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', marginTop: 55, marginLeft: 40 }}>								<Image style={{ width: 190, height: 190, borderRadius: 150, alignSelf: 'center', }} resizeMode={'cover'} source={require('../../assets/images/profile.jpg')}/>							</View>						</ImageBackground>						<Text style={{ color: '#fff', fontFamily: 'ArbFONTSBold', fontSize: 20, alignSelf: 'flex-start', marginHorizontal: 60, marginTop: 15 }}>Shams</Text>					</View>					<TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ right: 10, position: 'absolute', margin: 20 }}>						<Image source={require('../../assets/images/close.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'}/>					</TouchableOpacity>				</View>				<DrawerItemList {...props} />				<DrawerItem labelStyle={{  color: '#ffffff', fontFamily: 'ArbFONTS' }} label={i18n.t('logout')} icon={() => <Image source={require('../../assets/images/logout.png')} style={{ width: 20, height: 20 }} resizeMode={'contain'}/>} />			</DrawerContentScrollView>		</ImageBackground>	);}