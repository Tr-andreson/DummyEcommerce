import type { Product, ProductCategoryT, ProductT } from "entities/models/product";

export interface IProductRepository {
  getAll(): Promise<ProductT>,
  getProductById(id: string): Promise<Product>,
  // searchProudct: (product: string) => Promise<ProductT | null>,
  // limit_skip: (limit?: number, skip?: number) => Promise<ProductT | null>
  // sort: (name: string) => Promise<ProductT | null>
  // categories: () => Promise<ProductCategoryT | null>
  // categoryList: () => Promise<[]>
  // getProductByCategory: (categoryName: string) => Promise<ProductT>
}
