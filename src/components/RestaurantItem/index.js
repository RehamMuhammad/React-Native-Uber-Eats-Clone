import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RestaurantImage, RestaurantInfo } from '..';
import {localRestaurants} from "../../common"



const RestaurantItem = (props) => {
    return (
        <>
        {/* <TouchableOpacity activeOpacity={1} style={{marginBottom:10}}> */}
          {props.restaurantData.map((res,index) => (
            <View key={index} style={{marginTop:10, padding:15, backgroundColor:"#fff"}}>
            <RestaurantImage source={res.image_url}/>
            <RestaurantInfo name={res.name} rating={res.rating}/>
            </View>
          ))}
         {/* </TouchableOpacity> */}
    </>
    )
}


export {RestaurantItem}
