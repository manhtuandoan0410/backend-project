import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Mainpage from '../components/Mainpage'
import ButtonAppBar from '../components/ButtonAppBar'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f3f8f6" />
            <ButtonAppBar />
            <Mainpage />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f8f6',
    },
});