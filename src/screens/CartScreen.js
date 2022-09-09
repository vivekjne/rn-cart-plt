import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import QuantityView from "../components/QuantityView";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <View style={styles.cartItemView}>
            <Text style={styles.cartItemNameText}>{item.name}</Text>

            <QuantityView
              handleAdd={() => dispatch(add(item))}
              handleRemove={() => dispatch(remove(item))}
              quantity={item?.qty}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={styles.cartEmptyView}>
            <Text style={styles.cartEmptyText}>Cart is Empty!</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartItemView: {
    padding: 10,
    elevation: 1,
    marginBottom: 16,
    borderWidth: StyleSheet.hairlineWidth,
  },
  cartItemNameText: { textAlign: "center", fontSize: 20, marginBottom: 10 },
  cartEmptyView: { flex: 1, alignItems: "center", justifyContent: "center" },
  cartEmptyText: { fontSize: 18, color: "#777" },
});
