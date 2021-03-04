// utility functions allow us to keep our files clean and organize functions that \
// we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem => 
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
			)
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};

	// TODO remove item currently not working .. work on this later
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	)

	if (existingCartItem.quantity === 1) {
		// if cartItem is not equal to the item to be removed.. return true
		return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
	}

	// decrease the quantity if not equal to 1, otherwise, run obove code...
	return cartItems.map(
		cartItem => cartItem.id === cartItemToRemove.id 
		? { ...cartItem, quantity: cartItem.quantity - 1}
		: cartItem)
}