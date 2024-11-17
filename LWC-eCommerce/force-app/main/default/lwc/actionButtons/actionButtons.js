import { LightningElement } from 'lwc';
import IMAGES from "@salesforce/resourceUrl/Images";

export default class ActionButtons extends LightningElement {
    language_icon = IMAGES + "/language-icon.png";
    heart_icon = IMAGES + "/heart-icon.png";
    cart_icon = IMAGES + "/cart-icon.png";

    handleLanguage() {
        console.log('Language clicked');
    }

    handleWishlist() {
        console.log('Wishlist clicked');
    }

    handleCart() {
        console.log('Cart clicked');
    }
}