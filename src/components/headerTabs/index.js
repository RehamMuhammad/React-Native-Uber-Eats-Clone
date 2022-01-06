import React from 'react'
import { View } from 'react-native'
import { HeaderButton } from '../headerButtons'
import { Styles } from './style'

 const HeaderTabs = () => {
    return (
        <View style={Styles.headerTabsView}>
          <HeaderButton text="Delievery" />
          <HeaderButton text="Pickup"/>
        </View>
    )
}

export {HeaderTabs}
