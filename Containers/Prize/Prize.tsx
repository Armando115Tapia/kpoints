import { MoreInfoComponent } from "../../components/MoreInfoComponent/MoreInfoComponent";
import { Text, View } from "../../components/Themed";
import { useStore } from "../../store/bookStore";

const Prize = () => {
  const currentMerchant = useStore((state) => state.currentMerchant);

  return (
    <View>
      <MoreInfoComponent merchantName={currentMerchant!.merchantName} />
    </View>
  );
};

export default Prize;
