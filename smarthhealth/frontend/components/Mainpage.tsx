import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ConditionResult from './ConditionResult';
import type { Condition } from '../src/types';

export default function Mainpage() {
    const [name, setName] = useState("");
    const [result, setResult] = useState<Condition | null>(null);

    const handleSubmit = () => {
        const query = name.trim();
        if (!query) return;
        setResult({
            name: query,
            causes: "Sample causes (placeholder)",
            symptoms: "Sample (placeholder)",
            treatment: "sample",
        });
        setName("");
    }

    return (
        <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.searchRow}>
                <TextInput
                    accessibilityLabel="Disease or condition"
                    placeholder="Disease or condition"
                    value={name}
                    onChangeText={setName}
                    onSubmitEditing={handleSubmit}
                    returnKeyType="search"
                    style={styles.input}
                />
                <Pressable
                    accessibilityRole="button"
                    onPress={handleSubmit}
                    style={({ pressed }) => [styles.searchButton, pressed && styles.pressed]}
                >
                    <Text style={styles.searchButtonText}>Search</Text>
                </Pressable>
            </View>
            {result && <ConditionResult condition={result} />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 32,
        paddingBottom: 24,
    },
    searchRow: {
        width: '100%',
        maxWidth: 600,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    input: {
        flex: 1,
        minHeight: 52,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#b8cec6',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        color: '#18352f',
        fontSize: 16,
    },
    searchButton: {
        minHeight: 48,
        justifyContent: 'center',
        paddingHorizontal: 18,
        borderRadius: 10,
        backgroundColor: '#167d68',
    },
    pressed: {
        opacity: 0.8,
    },
    searchButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
});