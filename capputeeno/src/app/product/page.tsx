'use client'
import BackButton from '@/components/BackButton'
import { DefaultPageLayout } from '@/components/DefaultPageLayout'
import ShopBagIcon from '@/components/icons/ShopBagIcon'
import useProduct from '@/hooks/useProduct'
import { formatPrice } from '@/utils/FormatPrice'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;
    img {
      max-width: 640px;
      width: 50%;
    }
    > div {
      display: flex;

      justify-content: space-between;
      flex-direction: column;
      button {
        background: #115d8c;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 0;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }
`

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 400;
    font-size: 16px;
    color: var(--text-dark-2);
  }
  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }
  span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-dark);
  }
  div {
    margin-top: 24px;
    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-size: 16px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
    }
  }
`

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useProduct(searchParams.id)
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} alt="" />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                * Frete de R$ 40,00 pra todo Brasil. Grátis para compras acima
                de R$ 900,00
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button>
              <ShopBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}

export default Product
