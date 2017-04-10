import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';



const AlbumDetail =({album}) =>{
  const {title, artist, thumbnail_image, image, url} =album;
  const {
    ThumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    ImageStyle,
  } =styles;


  return(
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
        source={{uri: thumbnail_image}}
        style={ThumbnailStyle} />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>
      <CardSection>
        <Image
        source={{uri:image}}
        style={ImageStyle} />
      </CardSection>
      <CardSection>
        <Button whenPressed={()=> Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>


    </Card>
  );
};

const styles={
  headerContentStyle:{
    flexDirection:'column',
    justifyContent:'space-around',
  },
  headerTextStyle:{
    fontSize:18,
  },
  ThumbnailStyle:{
    width:50,
    height:50,
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    marginLeft:10,
  },
  ImageStyle:{
    width: null,
    flex: 1,
    height: 300,
  },
};




export default AlbumDetail;
