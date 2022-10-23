import { StyleSheet, Text, View, Image } from 'react-native';
import { Themes } from '../assets/Themes'

const NavBar = ({ menu_url, moon_url }) => {
    return (
        <View style={styles.navBar}>
            <Image
                style={styles.logo}
                source={menu_url}
            />
            <Text style={styles.appName}>
                ensom
            </Text>
            <Image
                style={styles.logo}
                source={moon_url}
            />
        </View>
    );
}

export default NavBar;

const styles = StyleSheet.create({
    navBar: {
        flex: 0,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
    },
    logo: {
        height: 40,
        width: 40,
    },
    appName: {
        fontSize: 32,
        fontFamily: 'Sydney-Bold',
        color: Themes.dark.text
    }
})