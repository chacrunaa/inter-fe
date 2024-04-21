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

const formattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return null;
  }
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export const getFormattedDateText = (createdAt: any, updatedAt: any) => {
  const formattedCreateDate = formattedDate(createdAt);
  const formattedUpdateDate = formattedDate(updatedAt);

  if (formattedCreateDate === formattedUpdateDate) {
    return `Создано ${formattedCreateDate}`;
  } else {
    return `Обновлено ${formattedUpdateDate}`;
  }
};
