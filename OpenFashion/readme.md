# OpenFashion App

## Brief Overview
OpenFashion is a mobile application designed to showcase and sell a variety of clothing products. The app allows users to browse through a list of available products, add items to their cart, and proceed to checkout. 

The cart functionality includes adding items, removing items, and preventing duplicate items from being added.

## Implementation

### Data Storage
- **AsyncStorage:** AsyncStorage was used to store cart items persistently. The cart items are saved in JSON format and retrieved when the app is reopened. 

Functions used include : addToCart, removeFromCart, clearCartItems, loadCartItems

The items in the cart are only cleared by either removing them individually or clearing the cart entirely through the checkout button at the bottom of the Cart Screen.


## My Design Choices - UI/UX and Functionality
#### Flatlist 
I used 'flatlist' in both the Home Screen and the Cart Screen. It was used in the Home screen since the number of products available required that the user would be able to scroll down and browse with comfort. 

It was used in the Cart screen such that a long list of items added to cart would be able to be seen.

#### Header Functionality
The Home screen contains a 'drawer navigation', that navigates between the two screens that exist in the application, the Home screen and the Cart screen. It is displayed when the menu icon is pressed. 

I used React Native's gesture handler and drawer to create this. The code for this can be found in the App Navigator file.

The header for the Cart screen differs slightly. The drawer menu is displayed when the logo is pressed. It does not need a cart icon since it is the cart screen, and therefore only contains a search button.

#### Home Screen Functionality
The products are listed vertically in pairs, and all products can be viewed via scrolling down the available items. 

Each item contains an 'add to cart' button, identifiable by a 'black add sign in a circle' in the bottom right corner of the product image. When clicked on, the corresponding product is added to cart - is stored, and appears on the Cart screen. 

The horizontal space above the list of products contains no functionality.

#### Cart Screen Functionality
Products added to cart from the Home screen are displayed here.

 Each product has a 'red X sign in a circle' at the far right bottom corner of the product listing. 
When pressed, this allows a user to remove that particular item from the cart. 

A product cannot be displayed more than once in the Cart Screen.

- #### ***Checkout Footer***
At the bottom of the page is a checkout button, wrappped in a footer component. When pressed, all items in the cart are cleared, mimicking the end result of using a checkout button in a real-world deployed application. 
Users may proceed to checkout but may not actually go through the checkout process.
The cart screen returns a message showing that the cart is empty.

The total price of all items in the cart is also calculated and displayed right on top on the 'checkout footer'. 

***Font Used:*** Tenor Sans, available in Google Fonts.

***Images and Icons:*** Images and icons used in can be found in the Assets folder in the SRC folder.

## Screenshots of the App

![alt text](photo_1_2024-07-03_19-28-52.jpg) 
![alt text](photo_2_2024-07-03_19-28-52.jpg)
![alt text](photo_7_2024-07-03_19-28-52.jpg) 
![alt text](photo_6_2024-07-03_19-28-52.jpg)
![alt text](photo_3_2024-07-03_19-28-52-1.jpg) 
![alt text](photo_5_2024-07-03_19-28-52.jpg) 
![alt text](photo_4_2024-07-03_19-28-52.jpg)