import { createContainer } from "di/container";
import { DI_SYMBOLS } from "di/types";
import type { IProductRepository } from "interface/product.interface";

describe("Product Api testing", () => {
  test("If properties are available", async () => {

    const container = createContainer();
    const service = container.get<IProductRepository>(DI_SYMBOLS.ProductService);
    const products = await service.getAll();
    expect(products).toHaveProperty("limit")


  })
})
