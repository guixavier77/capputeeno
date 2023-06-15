import styled from 'styled-components'
import SearchIcon from './icons/SearchIcon'
import { InputHTMLAttributes } from 'react'

export const Primaryinput = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 400;
  font-family: inherit;
  color: var(--text-dark);
  border: none;
  @media (min-width: ${(props) => props.theme.desktop}) {
    font-size: 14px;
    line-height: 22px;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 250px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.desktop}) {
    width: 352px;
  }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <Primaryinput
        {...props}
        onChange={(event) => props.handleChange(event.target.value)}
      />
      <SearchIcon />
    </InputContainer>
  )
}
