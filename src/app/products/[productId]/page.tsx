import { Grid, Stack, Typography } from "@mui/material"
import getProduct from "./get-products"
import Image from "next/image"
import { getProductImage } from "../product-image"

interface SingleProductProps {
  params: {
    productId: string
  }
}

export default async function SingleProduct({ params }: SingleProductProps) {
  const product = await getProduct(params.productId)

  console.log('product: ', product)

  return (
    <Grid container marginBottom={"2rem"} rowGap={3} spacing={2}>
      {
        product.imageExists && (
          <Grid size={{ xs: 12, md: 6 }}>
            <Image
              src={getProductImage(product.id)}
              width={0}
              height={0}
              alt={product.name}
              className="w-auto md:w-3/2 h-auto"
              sizes="100vw"
            />
          </Grid>
        )
      }
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack gap={3}>
          <Typography variant="h2">{product.name}</Typography>
        
          <Typography>{product.description}</Typography>
          <Typography variant="h4">{product.price} PLN</Typography>
        </Stack>
      </Grid>
    </Grid>
  )

}
