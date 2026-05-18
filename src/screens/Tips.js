import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Tips = () => {
    const [dailyTip, setDailyTip] = useState('');

    useEffect(() => {
        const fetchTip = async () => {
            const response = await axios.get('https://6a0ab87921e445625696677a.mockapi.io/apiecosyncio/v1/app_logs');
            setDailyTip(response.data[0].dailyTip);
        };
        fetchTip();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daily Tip</Text>
            <Text>{dailyTip}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
});

export default Tips;