import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class about extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>this is about page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"gray"
    }
})

export default about