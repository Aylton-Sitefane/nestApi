import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: {
            prodId: string;
        };
    };
    getAllProducts(): {
        products: import("./product.model").ProductModel[];
    };
    getPorduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(productId: string, title: string, description: string, price: number): any;
    deleteProduct(productId: string): any;
}
