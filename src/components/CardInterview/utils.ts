export const formatOffer = (minOffer: number | null, maxOffer: number | null): string => {
  if (minOffer && maxOffer) {
    return `${minOffer.toLocaleString()} - ${maxOffer.toLocaleString()} ₽`;
  } else if (minOffer) {
    return `${minOffer.toLocaleString()} ₽`;
  } else if (maxOffer) {
    return `${maxOffer.toLocaleString()} ₽`;
  } else {
    return 'не указана';
  }
};

export const formattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return 'Дата некорректн, хуесосы чет не то отправили';
  }
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};
