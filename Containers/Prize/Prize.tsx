import {Text, View} from "../../components/Themed";
import {styles} from "../Home/Home.styles";

const Prize = () => {
    return (
        <View>
            <Text style={styles.title}>Aqui va el header</Text>
            <View>
                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    Aquí va los premios
                </Text>
            </View>
        </View>
    )
}
