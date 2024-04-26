export const formatOffer = (
  prefix: string | null,
  minOffer: number | null,
  maxOffer: number | null,
): string => {
  if (minOffer && maxOffer) {
    return `${minOffer.toLocaleString()} - ${maxOffer.toLocaleString()} ₽`;
  } else if (minOffer) {
    return `${prefix} ${minOffer.toLocaleString()} ₽`;
  } else if (maxOffer) {
    return `${prefix} ${maxOffer.toLocaleString()} ₽`;
  } else {
    return 'Размер офера не указан';
  }
};
