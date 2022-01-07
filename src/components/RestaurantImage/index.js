import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign"

const RestaurantImage = () => {
    return (
    <>
     <Image style={{width:"100%", height:180}} 
     source={{uri : 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqqnSBOWIFBCw1ImaBp_OeEYIODg_YOQeQw&usqp=CAU"}} />
     <TouchableOpacity style={{position:"absolute", right:30, top:30}}>
         <AntIcon name="hearto" size={25} color={"#fff"} />
     </TouchableOpacity>
    </>
    )
}


export {RestaurantImage}