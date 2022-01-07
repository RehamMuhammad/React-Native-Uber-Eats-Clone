import React from 'react'
import {SafeAreaView, ScrollView, View} from 'react-native'
import { HeaderTabs, SearchBar, Categories, RestaurantItem, RestaurantImage } from '../../components'

export default function HomeScreen () {
    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1 }}>
            <View style={{backgroundColor:"white", padding:15 }}>
           <HeaderTabs/>
           <SearchBar/>
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
           <Categories/>
           <RestaurantItem/>
           <RestaurantItem/>
           <RestaurantItem/>
           <RestaurantItem/>
           <RestaurantItem/>
           <RestaurantItem/>
           <RestaurantItem/>

           </ScrollView>
        </SafeAreaView>
    )
}

