import React from 'react';
import {Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';

export default ShowRoomScreen = () => {
    return <View style={{

        ...globalStyles.rootView,
        alignItems:"center",
        justifyContent:"center"
    }} >
        <Text style={globalStyles.textStyle18} > ShowRoomScreen</Text>
    </View>
}