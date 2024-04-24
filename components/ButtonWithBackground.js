import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';

const buttonWithBackground = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>

        </View>
    )

    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding:16,
        width:200,
        borderRadius:30,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 100, 
        marginLeft: 100
    },
    text: {
        color:'black',
        fontSize:20
    }

});

export default buttonWithBackground;