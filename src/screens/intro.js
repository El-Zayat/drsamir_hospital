import React from 'react';
import {
  View,
  Text,
 // Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  I18nManager
} from 'react-native';
import Image from 'react-native-scalable-image';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Fonts,colors,normalize} from '../utils/appTheme';
import i18n from '../locals/i18n';

const data = [
  {
    key: "1",
    titleEn:'Welcome to DR.Samir Abbas hospitals',
    titleAr:'أهلا بك فى مستشفى دكتور سمير عباس ',
    image: require('../../assets/images/intro1.png'),
    textEn:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
  {
    key: "2",
    titleEn:'Find your medicine specialist',
    titleAr:" هنا تجد أفضل  طبيب متخصص",
    image: require('../../assets/images/intro2.png'),
    textEn:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
  {
    key: "3",
    titleEn: 'Medical team for critical cases ',
    titleAr:"أفضل فريق طبى للحالات الحرجة",
    image: require('../../assets/images/intro3.png'),
    textEn:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
];



export default class App extends React.Component {
  _renderItem = ({item}) => {
    let title=I18nManager.isRTL?item.titleAr:item.titleEn
    return (
        <SafeAreaView style={styles.slide}>   
         
          <View style={styles.imgContainer}>
                <Image 
                  source={item.image} 
                  height={imageHeight}
                  // style={styles.image} 
                  // resizeMode="center"
                  // resizeMethod="resize"
                />            
          </View>    
          <Text style={styles.title}>{title}</Text>               
          <Text style={styles.text}>{item.textEn}</Text>         
        </SafeAreaView>
    );
  };

  _renderNextButton=()=>{
      return(
          <Text style={styles.mainBtn}>{i18n.t('next')}</Text>
      )
  }

  _renderDoneButton=()=>{
    let {navigation}=this.props
    return(
        <Text 
            style={styles.mainBtn}
            onPress={()=>navigation.navigate('TabNav')}
        >{i18n.t('start')}</Text>
    )
  }

  _renderSkipButton=()=>{
    return(
        <Text style={styles.secBtn}>{i18n.t('skip')}</Text>
    )
  }

  _renderPrevButton=()=>{
    return(
        <Text style={styles.secBtn}>{i18n.t('back')}</Text>
    )
   }

  render() {
    let {navigation}=this.props
    return (
      <View style={{flex: 1}}>
      
       <AppIntroSlider
          renderItem={this._renderItem}
          activeDotStyle={styles.activeDot}
          dotStyle={styles.dot}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this._renderDoneButton}
          renderSkipButton={this._renderSkipButton}
          renderPrevButton={this._renderPrevButton}
          bottomButton
          showSkipButton
          showPrevButton
          data={data}
        />
         <View style={styles.circleView}/>   
      </View>
    );
  }
}

const {Family,Size}=Fonts
const windowHeight = Dimensions.get('window').height;
const resizeHeight=windowHeight/812
const imageHeight=305*resizeHeight
const containerImgHeight=270*resizeHeight

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    circleView:{
        backgroundColor:colors.primary,
        position:"absolute",
        top:-110*resizeHeight,
        right:-120*resizeHeight,
        height:220*resizeHeight,
        width:220*resizeHeight,
        borderRadius:110,               
    },
    slide: {
        flex: 1,
        paddingHorizontal:40,
        paddingBottom: 96, 
        backgroundColor: colors.white,
    },
    image: {
       // marginTop:50, 
        height:"100%",
        width:"100%",
    },
    imgContainer:{
        marginTop:120*resizeHeight,
        height:containerImgHeight,
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundColor:'#E3F1E3',   
        borderRadius:25,
    },
    title: {
        marginTop:45*resizeHeight,
        fontSize:normalize(Size.fs_18),
        fontFamily:Family.Bold,
        color:colors.textColor,
        textAlign: 'center',
    },
    text: {
        marginTop:12*resizeHeight,
        fontSize:normalize(Size.fs_14),
        fontFamily:Family.Regular,
        color:colors.textGray,
        textAlign:'center',     
    },
    activeDot:{
        width:20,
        height:4,
        backgroundColor:colors.primary
    },
    dot:{
        width:18,
        height:3,
        backgroundColor:'rgba(58,153,59,0.3)',
    },
    mainBtn:{
        marginTop:20*resizeHeight,
        width:"80%",
        alignSelf:"center",
        fontSize:normalize(Size.fs_16) ,
        fontFamily:Family.Medium,
        color:colors.white,
        textAlign:'center',        
        backgroundColor:colors.secondary,
        borderRadius:25,
        paddingVertical:15*resizeHeight
    },
    secBtn:{
        alignSelf:"center",
        width:"80%",
        fontSize:normalize(Size.fs_16) ,
        fontFamily:Family.Medium,
        color:colors.textGray,
        textAlign:'center',
        backgroundColor:colors.white,
        borderRadius:8,
        paddingVertical:15*resizeHeight
    },

  });