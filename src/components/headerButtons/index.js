import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from './style'


const HeaderButton = (props) => {
    return (
        <View style={Styles.buttonView}>
            <TouchableOpacity style={{
                backgroundColor: props.activeTab === props.text? "black" : "white" , paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30
            }}
            onPress={() => {props.setActiveTab(props.text); console.log(props.activeTab)} }
            >
                <Text style={{ color: props.activeTab === props.text? "white" : "black" , fontSize: 15, fontWeight: "900" }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}


export { HeaderButton }