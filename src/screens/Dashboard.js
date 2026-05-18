import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchUsers } from '../api';

const Dashboard = () => {
    const [totalCarbonSaved, setTotalCarbonSaved] = useState(0);

    useEffect(() => {
        const getUsersData = async () => {
            const users = await fetchUsers();
            const total = users.reduce((acc, user) => acc + user.total_carbon_saved, 0);
            setTotalCarbonSaved(total);
        };
        getUsersData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total Carbon Saved</Text>
            <Text style={styles.value}>{totalCarbonSaved} kg</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 32,
        color: 'green',
    },
});

export default Dashboard;