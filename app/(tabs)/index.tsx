import CustomButton from "@/components/CustomButton";
import { Text, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>홈 스크린</Text>
      <CustomButton label="버튼" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default HomeScreen;
