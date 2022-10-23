import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Profiles, Icons } from './assets/Themes';
import NavBar from './components/header';
import Footer from './components/footer';
import Audio from './components/audio';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.dark.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      {/* Header */}
      <NavBar
        menu_url={Icons.menu.dark}
        moon_url={Icons.moon} />
      
      {/* Profile */}
      <View style={styles.profile}>
        <ProfileImage />
        <Audio
          play_url={Icons.player.dark}
          audiowave_url={Icons.audioWave.dark}
        />
      </View>
      
      {/* Footer */}
      <Footer
        discovery_url={Icons.discover.dark}
        match_url={Icons.heart.dark}
        dm_url={Icons.messages.dark} />
    </View>
  );
}

const ProfileImage = () => {
  return (
    <ImageBackground style={styles.profileImage} imageStyle={{borderRadius: 15}} source={Profiles.mtl.image}>
      <Text style={styles.name}>{Profiles.mtl.name}</Text>
      <Text style={styles.miles}>{Profiles.mtl.caption}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.dark.bg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  profile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%",
    maxWidth: 550,
    padding: 12,
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowRadius: Themes.dark.shadows.shadowRadius,
    shadowOffset: Themes.dark.shadows.shadowOffset,
    shadowOpacity: Themes.dark.shadows.shadowOpacity
  },
  profileImage: {
    display: 'flex',
    aspectRatio: 1,
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  name: {
    fontSize: 32,
    fontFamily: 'Sydney',
    color: Themes.dark.text,
    marginLeft: 10,
    marginTop: 10,
  },
  miles: {
    fontSize: 18,
    fontFamily: 'Sydney',
    color: Themes.dark.text,
    marginLeft: 10,
    marginBottom: 10,
  },
});
