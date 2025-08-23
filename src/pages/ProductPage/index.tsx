import { Card } from "@/components/ui/card"
import { Wait } from "@/lib/utils"
import { createContainer } from "di/container"
import { DI_SYMBOLS } from "di/types"
import type { Product } from "entities/models/product"
import { CardContent } from "inspiration/clean-architecture/app/_components/ui/card"
import type { IProductRepository } from "interface/product.interface"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ProductPage = () => {
  let params = useParams()
  let id = params.id;
  if (!id) return

  const [data, setData] = useState<Product>()

  const getProductsById = async () => {
    await Wait(5000)
    const container = createContainer()
    const service = container.get<IProductRepository>(DI_SYMBOLS.ProductService)
    const products = await service.getProductById(id);
    setData(products)

  }

  useEffect(() => {
    getProductsById()

  }, [id])

  return (
    <div>
      <Link to="/">Back</Link>
      <h4>Product Page {params.id}</h4>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <img src={data?.images[0]} />
          </CardContent>
        </Card>
        <div className="col-span-2 p-2">
          <h2>{data?.title}</h2>
          <p className="mt-4">{data?.description}</p>
          <h3>{data?.price}</h3>
        </div>
      </div>

    </div>
  )
}

export default ProductPage
