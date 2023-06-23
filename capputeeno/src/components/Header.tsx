'use client'
import { styled } from 'styled-components'
import { Saira_Stencil_One as SairaStencilOne } from 'next/font/google'
import { PrimaryInputWSearchIcon } from './PrimaryInput'
import CartControl from './CartControl'
import useFilter from '@/hooks/useFilter'

const sairaStencilOne = SairaStencilOne({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  @media (min-width: ${(props) => props.theme.desktop}) {
    padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  text-decoration: none;
  font-weight: 400;
  line-height: 150%;
  font-size: 20px;
  @media (min-width: ${(props) => props.theme.tablet}) {
    font-size: 24px;
  }
  @media (min-width: ${(props) => props.theme.desktop}) {
    font-size: 40px;
  }
`

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { search, setSearch } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className} href="/">
        Capputeeno
      </Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}

export default header
