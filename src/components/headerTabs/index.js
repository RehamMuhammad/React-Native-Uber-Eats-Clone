import React from 'react'
import { View } from 'react-native'
import { HeaderButton } from '../headerButtons'

 const HeaderTabs = () => {
    return (
        <View>
          <HeaderButton text="Delievery" />
          <HeaderButton text="Pickup"/>
        </View>
    )
}


export {HeaderTabs}
