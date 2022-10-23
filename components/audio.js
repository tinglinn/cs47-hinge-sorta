import { StyleSheet, Text, View, Image } from 'react-native';
import { Themes } from '../assets/Themes'

const Audio = ({play_url, audiowave_url}) => {
    return (
        <View style={styles.audioContainer}>
            <Text style={styles.hotTake}>
                My hottest take
            </Text>
            <View style={styles.audiowave}>
                <Image style={{ width: '20%', aspectRatio: 1 }} source={play_url}></Image>
                <Image style={{ width: '78%', aspectRatio: 6 }} source={audiowave_url}></Image>
            </View>
        </View>
    );
}

export default Audio;

const styles = StyleSheet.create({
    audioContainer: {
        backgroundColor: Themes.dark.bgSecondary,
        width: '100%',
        height: '26%',
        borderRadius: 18,
        position: 'relative',
        padding: 15,
        paddingBottom: 24,
        borderRadius: 18,
        shadowColor: Themes.dark.shadows.shadowColor,
        shadowRadius: Themes.dark.shadows.shadowRadius,
        shadowOffset: Themes.dark.shadows.shadowOffset,
        shadowOpacity: Themes.dark.shadows.shadowOpacity
    },
    hotTake: {
        fontSize: 24,
        color: Themes.dark.text,
        fontFamily: 'Sydney',
        marginBottom: 12
    },
    audiowave: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})