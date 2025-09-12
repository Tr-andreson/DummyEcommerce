import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import type { Product } from "entities/models/product"
import { Link } from "react-router-dom"

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <Card >
          <img
            loading="lazy"
            src={product.images[0]} width={100} height={400} className="w-full" />
          <CardHeader>{product.title}</CardHeader>
          <div className="p-4">
            <CardDescription>{product.description}</CardDescription>
          </div>
        </Card>

      </Link >
    </>
  )
}
