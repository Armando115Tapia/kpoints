import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Image, Pressable, useColorScheme} from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const styleHeader =  {
        backgroundColor: "rgb(97,173,210)",
        borderBottomWidth: 0
    };

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    headerStyle: {
                        ...styleHeader
                    },
                    title: 'Inicio',
                    tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({pressed}) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />

            <Tabs.Screen
                name="historicalPoints"
                options={{
                    headerStyle: {
                        ...styleHeader
                    },
                    title: 'Historial',
                    tabBarIcon: ({color}) => <TabBarIcon name="history" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="prize"
                options={{
                    headerStyle: {
                        ...styleHeader
                    },
                    title: 'Premios',
                    tabBarIcon: ({color}) => <TabBarIcon name="trophy" color={color}/>,
                }}
            />

        </Tabs>
    );
}
