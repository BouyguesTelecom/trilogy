export enum PriceVariant {
  PRIMARY = 'main',
  SECONDARY = 'main-price',
}

export type PriceVariantValues = 'main' | 'main-price'

export enum PriceLevel {
  LEVEL1 = 1,
  LEVEL2 = 2,
  LEVEL3 = 3,
  LEVEL4 = 4,
  LEVEL5 = 5,
  LEVEL6 = 6,
  LEVEL7 = 7,
}

export type PriceLevelValues = `${PriceLevel}`
