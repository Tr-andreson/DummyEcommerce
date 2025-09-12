import { createContainer } from "di/container";
import { DI_SYMBOLS } from "di/types";
import type { ProductT } from "entities/models/product";
import type { IProductRepository } from "interface/product.interface";
import { useEffect, useState } from "react";
import { ProductCard } from "./ui/ProductCard";
import { ProductSkeleton } from "./ui/Skeleton";

export const Products = () => {
  const [data, setData] = useState<ProductT>()

  const getProduct = async () => {
    const container = createContainer();
    const service = container.get<IProductRepository>(DI_SYMBOLS.ProductService);
    const products = await service.getAll();
    setData(products)
  }

  useEffect(() => {
    getProduct()
  }, [])

  if (!data) return <ProductSkeleton />

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {data.products.map((_) => {
        return (
          <ProductCard key={_.id} product={_} />
        )
      })}
    </div>
  )
}
