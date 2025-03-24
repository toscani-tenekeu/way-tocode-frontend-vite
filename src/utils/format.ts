export const formatPrice = (price: number): string => {
  if (price === 0) return 'Free'
  return `${price.toLocaleString('fr-FR')} FCFA`
}