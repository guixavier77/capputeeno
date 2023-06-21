import styled from 'styled-components'

import BackIcon from './icons/BackIcon'
import { useRouter } from 'next/navigation'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: var(--secondary-text);
  line-height: 150%;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
`
interface BtnProps {
  navigate: string
}
const BackButton = ({ navigate }: BtnProps) => {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }
  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      voltar
    </Button>
  )
}

export default BackButton
