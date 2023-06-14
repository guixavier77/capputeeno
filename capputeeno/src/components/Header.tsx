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
  padding: 20px 160px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

const header = () => {
  const { search, setSearch } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
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
