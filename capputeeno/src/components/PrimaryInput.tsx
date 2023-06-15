import styled from 'styled-components'
import SearchIcon from './icons/SearchIcon'
import { InputHTMLAttributes } from 'react'

export const Primaryinput = styled.input`
  width: 352px;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  font-family: inherit;
  color: var(--text-dark);
  border: none;
`

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
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
