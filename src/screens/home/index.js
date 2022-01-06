import React from 'react'
import {SafeAreaView, View } from 'react-native'
import { HeaderTabs, SearchBar } from '../../components'

export default function HomeScreen () {
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1 }}>
            <View style={{backgroundColor:"white", padding:15 }}>
           <HeaderTabs/>
           <SearchBar/>
           </View>
           
        </SafeAreaView>
    )
}

