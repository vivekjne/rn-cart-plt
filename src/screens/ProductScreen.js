import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { add, remove } from "../store/cartSlice";
import ProductItem from "../components/ProductItem";
import QuantityView from "../components/QuantityView";

const ProductScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.cart);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const getCartItemsCount = () => {
    return items.reduce((acc, item) => {
      console.log({ acc });
      return item?.qty + acc;
    }, 0);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Cart")}
          title={`Cart: ${getCartItemsCount()}`}
          color={"red"}
        />
      ),
    });
  }, [items, navigation]);

  const handleAddToCart = React.useCallback((item) => {
    const cartItem = { ...item, qty: 1 };
    dispatch(add(cartItem));
  }, []);
  return loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size={"large"} />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          const isItemInCart = items.find((c) => c.id === item.id);

          return (
            <ProductItem
              product={item}
              handleAddToCart={handleAddToCart}
              defaultActionView={!!isItemInCart}
              productCartQty={isItemInCart?.qty}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
