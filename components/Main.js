import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Location from '../Enums/Location';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Home",
            location: Location.home,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 50,
        justifyContent: 'center',
    },
});

export default Main;