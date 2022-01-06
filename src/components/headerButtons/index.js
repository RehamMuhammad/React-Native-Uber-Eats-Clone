import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


const HeaderButton = (props) => { 
    return(
        <View>
            <TouchableOpacity>
            <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )}

    
export {HeaderButton}