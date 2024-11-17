import { LightningElement } from 'lwc';
import IMAGES from "@salesforce/resourceUrl/Images";

export default class SearchBox extends LightningElement {
    search_icon = IMAGES + "/search-icon.png"

    handleInput(event) {
        const searchValue = event.target.value;
        console.log('Search Input:', searchValue); 
    }
}