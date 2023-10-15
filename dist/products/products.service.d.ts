import { ProductModel } from "./product.model";
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): {
        prodId: string;
    };
    getProduct(): ProductModel[];
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    deleteProduct(productId: string): void;
    updateProduct(productId: string, title: string, description: string, price: number): void;
    private findProduct;
}
