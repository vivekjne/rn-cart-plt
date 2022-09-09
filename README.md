# rn-cart-plt
# React native sample cart app

This project was created using expo and contains a sample app that gets products from the url https://my-json-server.typicode.com/benirvingplt/products/products 

### How to run
```sh
yarn install

yarn start
```

## Functionality

 1. Fetch products from the url
 2. render the products using Flatlist 
 3. render the cart items using Flatlist
 4. ability to add products to cart
 5. ability to navigate between product and cart page
 6. ability to change cart item quantity
 7. state management with redux

## Technologies used

 1. React Native
 2. Redux Toolkit
 3. expo
 4. react navigation
 5. axios

## File Structure
```
📦src  
 ┣ 📂components  
 ┃ ┣ 📜CartItem.js  
 ┃ ┣ 📜ProductItem.js  
 ┃ ┗ 📜QuantityView.js  
 ┣ 📂screens  
 ┃ ┣ 📜CartScreen.js  
 ┃ ┗ 📜ProductScreen.js  
 ┗ 📂store  
 ┃ ┣ 📜cartSlice.js  
 ┃ ┣ 📜index.js  
 ┃ ┗ 📜productSlice.js
 ┣ 📜App.js
 ┣ 📜app.json
 ┣ 📜babel.config.js
 ┣ 📜package.json
 ┗ 📜yarn.lock
 ```
**store**
store contains the redux related files. the redux store is configured in the index file and two seaprate reducers are maintained to manage product and cart state.
**screens**
screens folder contains application screens for product and cart

**components**
components contain the different smaller components used for the screen.
