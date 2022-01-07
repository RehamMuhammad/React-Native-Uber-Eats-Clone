import React from 'react'
import { View, Text } from 'react-native'

const RestaurantInfo = () => {
    return (
        <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:5, alignItems:"center", marginTop:5}}>
            <View>
            <Text style={{fontSize:15, fontWeight:"900"}}>Rosto</Text>
            <Text style={{fontSize:13, color:"gray"}}>40-55 * min</Text>
            </View>
            <View style={{backgroundColor:"#eee", height:30, width:30, alignItems:"center",  justifyContent:"center", borderRadius:15}}>
            <Text>4.5</Text>
            </View>
        </View>
    )
}

export{RestaurantInfo}