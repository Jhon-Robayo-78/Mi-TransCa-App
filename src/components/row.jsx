import React from "react";
import {View, Text} from 'react-native'

const row = (props) =>{
    <View>
        <Text>{props.route}</Text>
        <Text>{props.routes}</Text>
        
    </View>
}

export default row;