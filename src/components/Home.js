import React, { useState , useEffect, useRef } from "react";import {	View,	Text,	Image,	TouchableOpacity,	ImageBackground,	KeyboardAvoidingView,	I18nManager,	Dimensions,	ScrollView} from "react-native";import {Container, Button, Form, Input, Toast, Header, Right, Left, Body, Icon, CheckBox} from 'native-base'import styles from '../../assets/styles'import i18n from "../../locale/i18n";import MapView from 'react-native-maps';import  Modal  from "react-native-modal";import COLORS from "../consts/colors";import { useDispatch, useSelector } from 'react-redux'const width		 = Dimensions.get('window').width;const height	 = Dimensions.get('window').height;function Home({navigation, route}) {	return (		<Container>			<ImageBackground source={require('../../assets/images/menu_bg.png')} style={{ width, height, alignSelf: 'center', flexGrow: 1 }} resizeMode={'cover'}>				<Header style={{ backgroundColor: 'transparent', marginTop: 10, borderBottomWidth: 0 }} noShadow>					<Right style={{ flex: 0, marginLeft: 10 }}>						<TouchableOpacity onPress={() => navigation.openDrawer()} style={{ width: 50, height: 50, justifyCenter: 'center', alignItems: 'center' }}>							<Image source={require('../../assets/images/menu.png')} style={{ width: 27, height: 27, marginTop: 10 }} resizeMode={'contain'}/>						</TouchableOpacity>					</Right>					<Body style={{ alignSelf: 'center', flex: 1 }}>						<Text style={{ textAlign: 'center', width: '100%', color: '#fff', fontSize: 30, fontFamily: 'VIP_cartoon' }}>{ i18n.t('safari') }</Text>					</Body>					<Left style={{ flex: 0 }}>						<TouchableOpacity style={{ width: 50, height: 50, justifyCenter: 'center', alignItems: 'center' }}>							<Image source={require('../../assets/images/notification.png')} style={{ width: 23, height: 23, marginTop: 10 }} resizeMode={'contain'}/>						</TouchableOpacity>					</Left>				</Header>				<View style={styles.tripHeaderShadow}>					<View style={[styles.tripHeaderImage]}>						<View style={[styles.tripImage ]}>							<View style={[ styles.bg_White, styles.Width_100, styles.position_A, styles.height_90, { zIndex: 0 } ]} />							<Text style={[styles.textSize_15, styles.text_black, styles.textBold, styles.textCenter]}>{ i18n.t('allSecServ') }</Text>							<Text style={[styles.textSize_15, styles.text_black, styles.textBold, styles.textCenter]}>{ i18n.t('allServices') }</Text>						</View>					</View>				</View>				<View style={[styles.mapView , styles.paddingHorizontal_25 , {bottom: -50, paddingTop: 55}]}>					<ScrollView >						<TouchableOpacity onPress={() => navigation.navigate('services')} style={[styles.Width_100 ,  styles.Radius_15 ,styles.height_200 , styles.paddingHorizontal_25 ,							styles.paddingVertical_10, styles.marginBottom_25,							{overflow:'hidden' , justifyContent:'flex-end' , alignItems:'flex-start'}]}>							<Image source={require('../../assets/images/slider_1.png')}								   style={[styles.Radius_15,{position:'absolute'}]} resizeMode={'contain'}/>							<Text style={[styles.textSize_14, styles.text_White, styles.textBold, styles.textCenter]}>{ i18n.t('wild_kashta') }</Text>						</TouchableOpacity>						<TouchableOpacity onPress={() => navigation.navigate('services')} style={[styles.Width_100 ,  styles.Radius_15 ,styles.height_200 , styles.paddingHorizontal_25 ,							styles.paddingVertical_10, styles.marginBottom_25,							{overflow:'hidden' , justifyContent:'flex-end' , alignItems:'flex-start'}]}>							<Image source={require('../../assets/images/prov_1.jpg')}								   style={[styles.Radius_15,{position:'absolute'}]} resizeMode={'contain'}/>							<Text style={[styles.textSize_14, styles.text_White, styles.textBold, styles.textCenter]}>{ i18n.t('sea_trip') }</Text>						</TouchableOpacity>					</ScrollView>				</View>			</ImageBackground>		</Container>	)}export default Home;