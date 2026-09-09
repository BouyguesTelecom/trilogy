export type GridItemSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export interface GridSize {
  mobile?: GridItemSize
  tablet?: GridItemSize
  touch?: GridItemSize
  desktop?: GridItemSize
  widescreen?: GridItemSize
  fullhd?: GridItemSize
}
