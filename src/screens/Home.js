import React from 'react';
import {Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';

export default Home = () => {
    return <View style={{

        ...globalStyles.rootView,
        alignItems:"center",
        justifyContent:"center"
    }} >
        <Text style={globalStyles.textStyle18} > Home Screen</Text>
    </View>
}