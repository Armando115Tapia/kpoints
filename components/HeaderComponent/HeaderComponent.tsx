import {styles} from "../../Containers/Home/Home.styles";
import {Image} from "react-native";
import {Text, View} from "../Themed";


export const HeaderComponent = () =>{
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/person_v1.webp')} style={{width: 100, height: 100}}
                   resizeMode={"contain"}/>
            <Text
                style={styles.getStartedText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                Nombre de usuario
            </Text>
        </View>
    )
}
export default HeaderComponent