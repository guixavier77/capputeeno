import { formatPrice } from '@/utils/FormatPrice'
import styled from 'styled-components'

interface ProductCardProps {
  image: string
  title: string
  price: number
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 0 4px 4px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 256px;
  img {
    width: 256px;
    height: 300px;
  }
  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }
  p {
    font-weight: 600;
    line-height: 150%;
    font-size: 14px;
    color: var(--shapes-dark);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      background: var(--shapes);
      padding: 0;
    }
  }
`

const ProductCard = (props: ProductCardProps) => {
  const price = formatPrice(props.price)
  return (
    <Card>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  )
}

export default ProductCard
