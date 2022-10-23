import { StyleSheet, Text, View, Image } from 'react-native';
import { Themes } from '../assets/Themes'

const Footer = ({discovery_url, match_url, dm_url}) => {
    return (
        <View style={styles.footer}>
            <View style={styles.footerIcon}>
                <Image
                    style={styles.icon}
                    source={discovery_url}>
                </Image>
                <Text style={styles.iconText}>Discovery</Text>
            </View>
            <View style={styles.footerIcon}>
                <Image
                    style={{ width: 50, height: 40, marginBottom: 5 }}
                    source={match_url}>
                </Image>
                <Text style={styles.iconText} >Matches</Text>
            </View>
            <View style={styles.footerIcon}>
                <Image
                    style={styles.icon}
                    source={dm_url}>
                </Image>
                <Text style={styles.iconText}>DMs</Text>
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Themes.dark.navigation,
    },
    footerIcon: {
        height: '75%',
        width: '20%',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 18,
        fontFamily: 'Sydney',
        color: Themes.dark.textSecondary
    },
    icon: {
        height: 40,
        width: 40,
        marginBottom: 5
    }
});