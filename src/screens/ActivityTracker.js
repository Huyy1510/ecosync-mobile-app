import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { logActivity } from '../api';

const ActivityTracker = () => {
    const [activityType, setActivityType] = useState('');
    const [impactValue, setImpactValue] = useState('');

    const handleLogActivity = async () => {
        await logActivity({ activity_type: activityType, impact_value: impactValue });
        // Clear inputs or show success message
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log Your Activity</Text>
            <TextInput placeholder="Activity Type" value={activityType} onChangeText={setActivityType} style={styles.input} />
            <TextInput placeholder="Impact Value" value={impactValue} onChangeText={setImpactValue} keyboardType="numeric" style={styles.input} />
            <Button title="Log Activity" onPress={handleLogActivity} />
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
    },
});

export default ActivityTracker;