import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuantityView from "./QuantityView";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        padding: 10,
        elevation: 1,
        marginBottom: 16,
        borderWidth: StyleSheet.hairlineWidth,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}>
        {cartItem.name}
      </Text>

      <QuantityView
        handleAdd={() => dispatch(add(cartItem))}
        handleRemove={() => dispatch(remove(cartItem))}
        quantity={cartItem.qty}
      />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
