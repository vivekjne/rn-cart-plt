import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const QuantityView = ({ handleAdd, handleRemove, quantity }) => {
  return (
    <View style={styles.quantityViewContainer}>
      <Button color={"red"} title="-" onPress={handleRemove} />
      <Text style={{ paddingHorizontal: 8 }}>{quantity}</Text>
      <Button color={"red"} title="+" onPress={handleAdd} />
    </View>
  );
};

export default QuantityView;

const styles = StyleSheet.create({
  quantityViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
