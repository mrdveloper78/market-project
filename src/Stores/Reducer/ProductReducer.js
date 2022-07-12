





const initialState = {
    product: { id: 0, productName: "", price: 0, sku: "", stockQuantity: 0, publishData: 1401 / 3 / 31 },
    productList: [],
    DigitalProductList: [
        { id: 1, productName: "A32", price: 6000000, sku: "", stockQuantity: 30, publishData: 1401 / 3 / 31, imgSrc: "/DPI/A32.PNG" },
        { id: 2, productName: "A53", price: 11000000, sku: "", stockQuantity: 20, publishData: 1401 / 3 / 31, imgSrc: "/DPI/A53.PNG" },
        { id: 3, productName: "A73", price: 14000000, sku: "", stockQuantity: 18, publishData: 1401 / 3 / 31, imgSrc: "/DPI/A73.PNG" },
        { id: 4, productName: "S21", price: 17000000, sku: "", stockQuantity: 10, publishData: 1401 / 3 / 31, imgSrc: "/DPI/S21.PNG" },
        { id: 5, productName: "S22", price: 40000000, sku: "", stockQuantity: 10, publishData: 1401 / 3 / 31, imgSrc: "/DPI/S22.PNG" },
        { id: 6, productName: "A12", price: 4000000, sku: "", stockQuantity: 60, publishData: 1401 / 3 / 31, imgSrc: "/DPI/A12.PNG" },
        { id: 7, productName: "M12", price: 4500000, sku: "", stockQuantity: 30, publishData: 1401 / 3 / 31, imgSrc: "/DPI/M12.PNG" },
        { id: 8, productName: "M11", price: 3500000, sku: "", stockQuantity: 25, publishData: 1401 / 3 / 31, imgSrc: "/DPI/M11.PNG" }
    ],
    SportProductList: [
        { id: 1, productName: "Dambel10Kg", price: 640000, sku: "", stockQuantity: 30, publishData: 1401 / 3 / 31, imgSrc: "/SPI/Dambel10Kg.PNG" },
        { id: 2, productName: "Dambel1Kg", price: 80000, sku: "", stockQuantity: 20, publishData: 1401 / 3 / 31, imgSrc: "/SPI/Dambel1Kg.PNG" },
        { id: 3, productName: "Dambel5Kg", price: 363000, sku: "", stockQuantity: 18, publishData: 1401 / 3 / 31, imgSrc: "/SPI/Dambel5Kg.PNG" },
        { id: 3, productName: "Dambel2Kg", price: 142000, sku: "", stockQuantity: 18, publishData: 1401 / 3 / 31, imgSrc: "/SPI/Dambel2Kg.PNG" }
    ],
    UtilProductList: [
        { id: 1, productName: "Boss18", price: 840000, sku: "", stockQuantity: 30, publishData: 1401 / 3 / 31, imgSrc: "/UPI/Boss18.PNG" },
        { id: 2, productName: "Ok1218", price: 1200000, sku: "", stockQuantity: 20, publishData: 1401 / 3 / 31, imgSrc: "/UPI/Ok1218.PNG" },
        { id: 3, productName: "Makita14", price: 5000000, sku: "", stockQuantity: 18, publishData: 1401 / 3 / 31, imgSrc: "/UPI/Makita14.PNG" },
        { id: 3, productName: "Ronix8530", price: 1200000, sku: "", stockQuantity: 18, publishData: 1401 / 3 / 31, imgSrc: "/UPI/Ronix8530.PNG" }
    ],
    modalState: false,
    loginState: { userName: "", password: 0 },
    basketState: null
};

const ProductReucer = (state = initialState, action) => {

    switch (action.type) {
        case "openModal": {
            return { ...state, modalState: true }
        }
            break;

        case "closeModal": {
            return { ...state, modalState: false }
        }
            break;

        case "resetForm": {
            return { ...state, loginState: { userName: "", password: 0 } }
        }
            break;

        case "increament": {
            return { ...state, basketState: state.basketState + 1 }
        }
            break;

        case "decreament": {
            return { ...state, basketState: state.basketState - 1 }
        }
            break;

        case "register": {
            const { productList } = state;
            return { ...state, productList: [...productList, action.payload] }
        }
            break;

        case "delete": {
            const { productList } = state;
            const index = productList.findIndex(value => value.id === action.payload);
            if (index !== -1) {

                productList.splice(index, 1);
                return { ...state, productList: productList };
            }

        }
            break;



        default:
            return state;
    }
}




export default ProductReucer;