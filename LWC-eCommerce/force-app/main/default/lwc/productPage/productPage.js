import { LightningElement, wire } from 'lwc';
import getProducts from '@salesforce/apex/ProductController.getProducts';

export default class ProductPage extends LightningElement {
    products; // Armazena os produtos retornados
    error; // Armazena erros, caso ocorram

    @wire(getProducts)
    wiredProducts({ error, data }) {
        if (data) {
            this.products = data; // Armazena os dados dos produtos retornados pelo Apex
            this.error = undefined; // Limpa qualquer erro anterior
        } else if (error) {
            this.error = error; // Armazena o erro, se ocorrer
            this.products = undefined; // Limpa os dados, se houver erro
            console.error('Erro ao carregar produtos:', error);
        }
    }
}