import React from 'react'
import { View, Text } from 'react-native'

const RestaurantInfo = (props) => {
    return (
        <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:5, alignItems:"center", marginTop:5}}>
            <View>
            <Text style={{fontSize:15, fontWeight:"900"}}>{props.name}</Text>
            <Text style={{fontSize:13, color:"gray"}}>40-55 * min</Text>
            </View>
            <View style={{backgroundColor:"#eee", height:30, width:30, alignItems:"center",  justifyContent:"center", borderRadius:15}}>
            <Text>{props.rating}</Text>
            </View>
        </View>
    )
}

export{RestaurantInfo}