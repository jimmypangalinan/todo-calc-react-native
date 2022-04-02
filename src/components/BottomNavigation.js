import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../assets/colors'

function ButtomNavigator({ state, descriptors, navigation }) {
    return (

        <View style={styles.main}>
            <View style={styles.tabItem}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };


                const todoActive = {
                    uri: "https://firebasestorage.googleapis.com/v0/b/todocalc-b6e65.appspot.com/o/splash%2FtodoActive.png?alt=media&token=1c944665-def1-45b8-9fe0-13ae0bc93ddf",
                }

                const todo = {
                    uri: "https://firebasestorage.googleapis.com/v0/b/todocalc-b6e65.appspot.com/o/splash%2Ftodo.png?alt=media&token=d905a926-ff72-4877-8e81-85fd0fe2638e",
                }

                const calcActive = {
                    uri: "https://firebasestorage.googleapis.com/v0/b/todocalc-b6e65.appspot.com/o/splash%2FcalcActive.png?alt=media&token=1002899d-f4e8-480a-9aa8-bf894a9fd79d",
                }

                const calc = {
                    uri: "https://firebasestorage.googleapis.com/v0/b/todocalc-b6e65.appspot.com/o/splash%2Fcalc.png?alt=media&token=7ededbd0-12be-4798-bfb2-6c45e82ac18d",
                }

                const Icon = () => {
                    if (label == "Todos") {
                        return isFocused ? <Image source={todoActive} style={{ width: 35, height: 30 }} /> : <Image source={todo} style={{ width: 35, height: 30 }} />
                    }

                    if (label == "Calculator") {
                        return isFocused ? <Image source={calcActive} style={{ width: 35, height: 30 }} /> : <Image source={calc} style={{ width: 35, height: 30 }} />
                    }

                    return <Image source={todo} style={{ width: 35, height: 30 }} />
                }


                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.containerItem}
                    >
                        <Icon />
                        <Text style={styles.labelItem(isFocused)}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
        </View>
    );
}


export default ButtomNavigator

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.primary,
        bottom: -30
    },  
    tabItem: {
        // position:'',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 60,
        bottom: 30,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 5.27,
        elevation: 10,
    },
    containerItem: {
        alignItems: 'center',
    },
    labelItem: (isFocused) => ({
        color: isFocused ? colors.primary : '#7E7A7A',
        fontSize: 15,
        marginTop: 2
    })

})