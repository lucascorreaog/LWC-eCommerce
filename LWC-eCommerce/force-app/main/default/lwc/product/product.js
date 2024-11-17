import { LightningElement, api } from 'lwc';
import Images from '@salesforce/resourceUrl/Images';

export default class Product extends LightningElement {
    @api product; // Propriedade pública para receber os dados do produto

    // Getter para retornar um preço formatado
    get formattedPrice() {
        if (this.product?.Price) {
            return `R$ ${this.product.Price.toFixed(2).replace('.', ',')}`;
        }
        return 'Preço não disponível';
    }
}
