import { View } from "../../components/Themed";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { MainTitle } from "../../components/Titles/MainTitle/MainTitle";
import { ItemsContainer } from "../../components/ItemsContainer/ItemsContainer";
import { secondaryColor } from "../../constants/Colors";
import { MerchantPointsItem } from "../../components/Items/MerchantPointsItem/MerchantPointsItem";
import { MerchantsNames } from "../../constants/MerchantsNames";

const Home = () => {
  return (
    <View>
      <HeaderComponent></HeaderComponent>
      <View
        style={{
          height: "100%",
          position: "relative",
          backgroundColor: secondaryColor,
        }}
      >
        <MainTitle title="¡FELICIDADES!" subtitle="" divider />
        <ItemsContainer>
          <MerchantPointsItem
            merchantName={MerchantsNames.macdonalds}
            points={140}
          />
          <MerchantPointsItem merchantName={MerchantsNames.rappi} points={30} />
          <MerchantPointsItem merchantName={MerchantsNames.apple} points={75} />
          <MerchantPointsItem
            merchantName={MerchantsNames.addidas}
            points={80}
          />
        </ItemsContainer>
      </View>
    </View>
  );
};

export default Home;
