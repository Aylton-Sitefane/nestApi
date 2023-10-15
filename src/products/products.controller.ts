import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')

export class ProductsController{
    constructor(private readonly productService: ProductsService){}
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number) 
        {
        const generatedId = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id: generatedId}
    }

    @Get()
    getAllProducts(){
        return { products: this.productService.getProduct()};
    }

    @Get(':id')
    getPorduct(@Param('id') productId: string){
        return this.productService.getSingleProduct(productId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') productId: string, 
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number){
        
            this.productService.updateProduct(productId, title, description, price);
            return null;
    }
    @Delete(':id')
    deleteProduct(@Param('id') productId: string){
        this.productService.deleteProduct(productId);
        return null;
    }

}