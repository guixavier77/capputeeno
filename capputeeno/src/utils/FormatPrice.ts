export function formatPrice(valueInCents: number) {
  const value = valueInCents / 100
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
