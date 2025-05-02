import FeedList from "@/components/FeedList";
import { colors } from "@/constants";
import { SafeAreaView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});

export default HomeScreen;
