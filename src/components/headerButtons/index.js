import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from './style'


const HeaderButton = (props) => {
    return (
        <View style={Styles.buttonView}>
            <TouchableOpacity style={{
                backgroundColor: props.bgColor, paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30
            }}>
                <Text style={{ color: props.textColor , fontSize: 15, fontWeight: "900" }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}


export { HeaderButton }