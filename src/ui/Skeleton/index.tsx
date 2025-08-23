import { Skeleton } from "@/components/ui/skeleton"

export const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>

  )
}

const CardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )

}
