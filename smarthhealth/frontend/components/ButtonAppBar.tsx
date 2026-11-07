import { StyleSheet, Text, View } from 'react-native';

export default function ButtonAppBar() {
    return (
        <View style={styles.bar}>
            <Text style={styles.menu} accessibilityLabel="Menu">☰</Text>
            <Text style={styles.title}>Smart Health Assistant</Text>
            <Text style={styles.login}>Log in</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        minHeight: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#167d68',
        elevation: 3,
    },
    menu: {
        marginRight: 16,
        color: '#ffffff',
        fontSize: 24,
    },
    title: {
        flex: 1,
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
    login: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    },
});