import { router, useFocusEffect } from "expo-router";
import { Text, SafeAreaView } from "react-native";

const MyScreen = () => {
  useFocusEffect(() => {
    router.replace("/auth");
  });

  return (
    <SafeAreaView>
      <Text>내 정보 스크린</Text>
    </SafeAreaView>
  );
};

export default MyScreen;
