const handleAddToCart = (data, keyID, quantity) => {
    const existingItemIndex = cartItem.findIndex(item => item.name === data.name);
    
    if (existingItemIndex > -1) {
        // If item exists, increase quantity
        setCartItem(prevCartItem =>
            prevCartItem.map((item, index) => 
                index === existingItemIndex 
                    ? { ...item, number: item.number + quantity } // Increase by the new quantity
                    : item
            )
        );
        console.log('Increased quantity:', data.name);
    } else {
        // If item doesn't exist, add it with the given quantity
        const { name, price, image } = data;
        setCartItem(prevCartItem => [
            ...prevCartItem, 
            { name, price, number: quantity, image: image.thumbnail }
        ]);
        console.log('Added new item:', name);
    }
};
