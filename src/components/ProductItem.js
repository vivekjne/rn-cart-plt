import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import QuantityView from "./QuantityView";
import { add, remove } from "../store/cartSlice";

const ProductItem = ({
  product,
  handleAddToCart,
  defaultActionView,
  productCartQty,
}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.itemColorView,
          { backgroundColor: product?.colour?.toLowerCase() },
        ]}
      >
        <Text style={styles.itemColorText}>COLOUR: {product.colour}</Text>
      </View>
      {!defaultActionView ? (
        <View style={{ padding: 10 }}>
          <Text style={styles.itemNameText}>{product.name}</Text>
          <Button
            onPress={() => handleAddToCart(product)}
            title="add to cart"
          />
        </View>
      ) : (
        <QuantityView
          handleAdd={() => dispatch(add(product))}
          handleRemove={() => dispatch(remove(product))}
          quantity={productCartQty}
        />
      )}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    elevation: 2,
    marginBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemColorView: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  itemColorText: { color: "#fff", fontSize: 18 },
  itemNameText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
