import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchGlobalGoals } from '../api';

const CommunityGoals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const getGoalsData = async () => {
            const data = await fetchGlobalGoals();
            setGoals(data);
        };
        getGoalsData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Community Goals</Text>
            {goals.map(goal => (
                <View key={goal.id} style={styles.goalContainer}>
                    <Text>{goal.goal_name}</Text>
                    <Text>Target: {goal.target_value}</Text>
                    <View style={styles.progressBarContainer}>
                        <View style={{ ...styles.progressBar, width: `${(goal.current_value / goal.target_value) * 100}%` }} />
                    </View>
                </View>
            ))}
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
    goalContainer: {
        marginBottom: 16,
    },
    progressBarContainer: {
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'green',
        borderRadius: 10,
    },
});

export default CommunityGoals;