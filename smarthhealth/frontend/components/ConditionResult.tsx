import { StyleSheet, Text, View } from 'react-native';
import type { Condition } from '../src/types';

type Props = {
    condition: Condition;
};

export default function ConditionResult({ condition }: Props) {
    return (
        <View style={styles.results}>
            <Text style={styles.title}>{condition.name}</Text>
            <Text style={styles.heading}>Causes</Text>
            <Text style={styles.body}>{condition.causes}</Text>
            <Text style={styles.heading}>Symptoms</Text>
            <Text style={styles.body}>{condition.symptoms}</Text>
            <Text style={styles.heading}>Treatment</Text>
            <Text style={styles.body}>{condition.treatment}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    results: {
        width: '100%',
        maxWidth: 600,
        marginTop: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: '#dce9e4',
        borderRadius: 12,
        backgroundColor: '#ffffff',
        elevation: 2,
    },
    title: {
        marginBottom: 16,
        color: '#18352f',
        fontSize: 24,
        fontWeight: '700',
    },
    heading: {
        marginTop: 12,
        marginBottom: 4,
        color: '#167d68',
        fontSize: 17,
        fontWeight: '700',
    },
    body: {
        color: '#405b53',
        fontSize: 16,
        lineHeight: 24,
    },
});