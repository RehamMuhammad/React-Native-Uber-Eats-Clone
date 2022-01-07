import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RestaurantImage, RestaurantInfo } from '..';

const RestaurantItem = () => {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:10}}>
        <View style={{marginTop:10, padding:15, backgroundColor:"#fff"}}>
        <RestaurantImage/>
        <RestaurantInfo/>
        </View>
        </TouchableOpacity>
    )
}


export {RestaurantItem}
