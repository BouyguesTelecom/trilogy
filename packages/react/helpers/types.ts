export const isNotNullNorUndefined = <Type>(value: Type): value is Exclude<Exclude<Type, undefined>, null> =>
  value !== undefined && value !== null
