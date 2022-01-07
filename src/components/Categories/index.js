import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { items } from './categoriesList'


 const Categories = () => {

    return (
      <View style={{marginTop:5, backgroundColor:"#fff", paddingVertical:10, paddingLeft:25}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item,index) => (
               <View key={index} style={{alignItems:"center", marginRight:30, }}>
               <Image source={item.Image} style={{width:50, height:40, resizeMode:"contain"}} />
               <Text style={{fontSize:13, fontWeight:"900"}}>{item.title}</Text>
             </View>
          ))}
        </ScrollView>
         </View>
    )
}

export {Categories}