import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CardSkeleton } from "@/ui/Skeleton"
import { createContainer } from "di/container"
import { DI_SYMBOLS } from "di/types"
import type { Product } from "entities/models/product"
import type { IProductRepository } from "interface/product.interface"
import { useCallback, useEffect, useState } from "react"

const FetchProducts = ({ id }: { id: string }) => {

  const [data, setData] = useState<Product>()

  const getProductsById = useCallback(async () => {
    const container = createContainer()
    const service = container.get<IProductRepository>(DI_SYMBOLS.ProductService)
    const products = await service.getProductById(id);
    setData(products)
  }, [id])


  useEffect(() => {
    getProductsById()
  }, [getProductsById])

  if (!data) return <CardSkeleton />

  return (
    <div>
      <h4>Product Page {id}</h4>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent>
            <img
              loading="lazy"
              height={"400px"}
              src={data?.images[0]} />
          </CardContent>
        </Card>
        <div className="col-span-2 p-2">
          <h2>{data?.title}</h2>
          <p className="mt-4">{data?.description}</p>
          <h3>{data?.price}</h3>
          <div className='mt-4'>
            <Button>Add To Cart</Button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default FetchProducts
