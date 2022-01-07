import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import { HeaderTabs, SearchBar, Categories, RestaurantItem } from '../../components';
import { localRestaurants } from '../../common';

export default function HomeScreen () {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    useEffect(() => {
        getRestaurantsFromYelp();
    }, [])

    const getRestaurantsFromYelp = () => {
        const API_KEY = "bwinKg6WJT5BdNf4nOnCfgd5z4z0jRePI0Se-BgIFIarAfu72W-Lalhu3cj-DBKAr4E69amW1qFDCdQxkL0i9INz5H_jQTvDbOo6f0qqUrD4fw9unmgmbN_EVm_YYXYx";
        const YELP_URL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=NYC`;

        const API_OPTIONS = {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        }

        return fetch(YELP_URL, API_OPTIONS).then(res => res.json()).then(json => setRestaurantData(json.businesses))
    }

 

    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1 }}>
            <View style={{backgroundColor:"white", padding:15 }}>
           <HeaderTabs/>
           <SearchBar/>
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
           <Categories/>
           <RestaurantItem restaurantData={restaurantData}/>
           </ScrollView>
        </SafeAreaView>
    )
}

