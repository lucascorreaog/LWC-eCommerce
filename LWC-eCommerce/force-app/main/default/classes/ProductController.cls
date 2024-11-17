public with sharing class ProductController {
    @AuraEnabled(cacheable=true)
    public static List<ProductWrapper> getProducts() {
        // Consulta SOQL para buscar os produtos
        List<Product2> products = [
            SELECT Id, Name, ProductCode, Family, Imagem_do_Produto__c, 
                   (SELECT UnitPrice FROM PricebookEntries WHERE IsActive = TRUE)
            FROM Product2 WHERE IsActive = TRUE
        ];

        // Lista para armazenar os produtos no formato do wrapper
        List<ProductWrapper> productWrappers = new List<ProductWrapper>();
        
        for (Product2 product : products) {
            // Obter a URL da imagem diretamente do campo personalizado
            String imageUrl = product.Imagem_do_Produto__c;

            // Obter o preço do produto, se disponível
            Decimal unitPrice = null;
            if (!product.PricebookEntries.isEmpty()) {
                unitPrice = product.PricebookEntries[0].UnitPrice;
            }

            // Adicionar o produto ao wrapper
            productWrappers.add(new ProductWrapper(product, imageUrl, unitPrice));
        }

        return productWrappers;
    }

    // Classe Wrapper para encapsular os dados do produto
    public class ProductWrapper {
        @AuraEnabled public String Id;
        @AuraEnabled public String Name;
        @AuraEnabled public String ProductCode;
        @AuraEnabled public String Family;
        @AuraEnabled public String ImageUrl;
        @AuraEnabled public Decimal Price;

        public ProductWrapper(Product2 product, String imageUrl, Decimal price) {
            this.Id = product.Id;
            this.Name = product.Name;
            this.ProductCode = product.ProductCode;
            this.Family = product.Family;
            this.ImageUrl = imageUrl;
            this.Price = price;
        }
    }
}
