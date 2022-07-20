import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Jobs = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Jobs screen</Text>
      <Button onPress={() => navigation.navigate("About")} title="Go to About Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Jobs;