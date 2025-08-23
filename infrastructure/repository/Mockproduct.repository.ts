import Api from "config/axios.config";
import type { ProductT, Product, ProductCategoryT } from "entities/models/product";
import type { IProductRepository } from "interface/product.interface";
import { injectable } from "inversify";

// @injectable()
// export class MockProductRepository implements IProductRepository {
//   async getAll(): Promise<ProductT> {
//     try {
//       const response = await Api.get("/products")
//       return response.data
//     } catch (error) {
//       throw new Error("Method not implemented.");
//     }
//   }
//   async getProductById(id: string): Promise<Product> {
//     try {
//       const response = await Api.get(`/products/${id}`)
//       return response.data
//     } catch (error) {
//       throw new Error("Method not implemented.");
//     }
//   }
// }
// @injectable()
// export class MockProductService implements IProductService {
//
//   constructor(
//     @inject(DI_SYMBOLS.ConsoleLogger)
//     private logger: ConsoleLogger
//   ) { }
//   async getProducts() {
//     this.logger.log("Working")
//     return [{ id: 1, title: "Mock iPhone", price: 999 }];
//   }
// }
