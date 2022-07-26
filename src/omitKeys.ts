export function omitKeys<Key extends string, T extends Record<Key, any>>(source: T, key: Key): Omit<T, Key> {
  const copy = { ...source };
  delete copy[key];
  return copy;
}
