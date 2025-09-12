import { Products } from "@/products"
import { ProductSkeleton } from "@/ui/Skeleton"
import { Suspense } from "react"

const HomePage = () => {
  return (
    <div className="custom-container">
      <h4>Home Page</h4>
      <Suspense fallback={<ProductSkeleton />}>
        <Products />
      </Suspense>
    </div>
  )
}

export default HomePage
