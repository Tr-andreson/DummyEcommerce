import FetchProducts from "@/components/module/product/fetch-products"
import { Suspense } from "react";
import { Link, useParams } from "react-router-dom"
import { CardSkeleton } from "@/ui/Skeleton"

const ProductPage = () => {
  let params = useParams()
  let id = params.id;
  if (!id) return


  return (
    <div className="custom-container">
      <Link to="/">Back</Link>
      <Suspense fallback={<CardSkeleton />}>
        <FetchProducts id={id} />
      </Suspense>

    </div>
  )
}

export default ProductPage
