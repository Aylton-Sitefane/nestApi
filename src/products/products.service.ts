import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductModel } from "./product.model";


@Injectable()
export class ProductsService{
    private products: ProductModel[] = [];

    insertProduct(title: string, desc: string, price:number) {
        const prodId = Math.random().toString();
        const newProduct = new ProductModel(prodId, title, desc, price);
        this.products.push(newProduct);
        return {prodId};
        
    }

    getProduct(){
        return [...this.products];
    }
    getSingleProduct(productId: string){
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    deleteProduct(productId: string){
        const index = this.findProduct(productId)[1];
        this.products.splice(index, 1);

    }

    updateProduct(productId: string, title: string, description: string, price: number){
        const [product, index] = this.findProduct(productId);
        const updateProduct = {...product};
        if (title) {
            updateProduct.title = title;
        }
        if (description) {
            updateProduct.description = description;
        }
        if (price) {
            updateProduct.price = price;
        }
        this.products[index] = updateProduct;

    }

    private findProduct(id: string): [ProductModel, number]{
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Coud not find');
        }
        return [product, productIndex];
    }
}