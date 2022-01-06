import React, {useState} from 'react'
import { View } from 'react-native'
import { HeaderButton } from '../headerButtons'
import { Styles } from './style'

 const HeaderTabs = () => {
   const [activeTab, setActiveTab] = useState("Delievery")

    return (
        <View style={Styles.headerTabsView}>
          <HeaderButton text="Delievery" bgColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
          <HeaderButton text="Pickup" bgColor="White" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    )
}

export {HeaderTabs}
