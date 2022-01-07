import React from 'react'
import {SafeAreaView, View , Text} from 'react-native'
import { HeaderTabs, SearchBar, Categories } from '../../components'

export default function HomeScreen () {
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1 }}>
            <View style={{backgroundColor:"white", padding:15 }}>
           <HeaderTabs/>
           <SearchBar/>
           </View>
           <Categories/>

           
        </SafeAreaView>
    )
}

