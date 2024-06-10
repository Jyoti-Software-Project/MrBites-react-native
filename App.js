import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import AwishBites from './src/AwishBites';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#007AFF" />
            <View style={styles.appContainer}>
                <AwishBites />
                <View>Demo</View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appContainer: {
        flex: 1,
    },
});