const getStoredBook = () => {

    const storedBooksSTR = localStorage.getItem('readList');

    if (storedBooksSTR) {
        const storedBookData = JSON.parse(storedBooksSTR);
        return storedBookData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert('Already marked as Read');
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
}

const getStoredWishList = () => {
    const storedWishSTR = localStorage.getItem('wishList');
    if (storedWishSTR) {
        const storedWishData = JSON.parse(storedWishSTR);
        return storedWishData;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishData = getStoredWishList();
    if (storedWishData.includes(id)) {
        alert('Already added to Wishlist');
    }
    else {
        storedWishData.push(id);
        const data = JSON.stringify(storedWishData);
        localStorage.setItem("wishList", data)
    }

}

export { addToStoredDB, getStoredBook, getStoredWishList, addToStoredWishList };