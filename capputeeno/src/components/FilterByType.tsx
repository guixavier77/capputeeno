import useFilter from '@/hooks/useFilter'
import { FilterType } from '@/types/FilterType'
import styled from 'styled-components'

interface FilterItemProps {
  selected: boolean
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? '600' : '400')};
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--text-dark);
  border-bottom: ${(props) =>
    props.selected ? '4px solid var(--orange-low)' : ''};
`
const FilterByType = () => {
  const { type, setType } = useFilter()

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}

export default FilterByType
