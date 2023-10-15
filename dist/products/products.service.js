"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    insertProduct(title, desc, price) {
        const prodId = Math.random().toString();
        const newProduct = new product_model_1.ProductModel(prodId, title, desc, price);
        this.products.push(newProduct);
        return { prodId };
    }
    getProduct() {
        return [...this.products];
    }
    getSingleProduct(productId) {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }
    deleteProduct(productId) {
        const index = this.findProduct(productId)[1];
        this.products.splice(index, 1);
    }
    updateProduct(productId, title, description, price) {
        const [product, index] = this.findProduct(productId);
        const updateProduct = { ...product };
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
    findProduct(id) {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new common_1.NotFoundException('Coud not find');
        }
        return [product, productIndex];
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map