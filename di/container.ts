import "reflect-metadata";
import { Container } from "inversify"
import { DI_SYMBOLS } from "./types";
import { ProductRepository } from "infrastructure/repository/product.repository";

export function createContainer() {
  const container = new Container();

  // const isMock = process.env.USE_MOCK === "true";
  const isMock = false
  if (isMock) {
    // container.bind(DI_SYMBOLS.ProductService).to(MockProductService);
  } else {
    container.bind(DI_SYMBOLS.ProductService).to(ProductRepository);
  }
  // container.bind(DI_SYMBOLS.ConsoleLogger).to(ConsoleLogger)
  return container;
}
