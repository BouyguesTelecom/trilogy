import { Item } from './AutoCompleteProps';

export const getLabel = (data: string | Item<unknown>) => (typeof data === 'string' ? data : data['label']);

const escapeRegExp = (str: string) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const defaultMatching = <T extends string | Item<unknown>>(data: T[], value: string): T[] => {
  const escapedValue = escapeRegExp(value);
  const searchWords = escapedValue.split(/\s+/).filter(word => word.length > 0);

  return data.filter(item => {
    const itemLabel = getLabel(item).toLowerCase();
    return searchWords.every(word => itemLabel.includes(word.toLowerCase()));
  });
};
