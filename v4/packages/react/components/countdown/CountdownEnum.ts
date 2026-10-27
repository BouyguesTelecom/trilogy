export enum CountdownFormat {
  DAY_HOUR_MIN_SEC = 'dd-hh-mm-ss',
  HOUR_MIN_SEC = 'hh-mm-ss',
  MIN_SEC = 'mm-ss',
  SEC = 'ss',
  DAY = 'dd',
  DAY_HOUR = 'dd-hh',
  DAY_HOUR_MIN = 'dd-hh-mm',
}
export enum CountdownUnite {
  DAY,
  HOUR,
  MIN,
  SEC,
}

export const getFormatWidth = (format: CountdownFormat): string => {
  switch (format) {
    case CountdownFormat.HOUR_MIN_SEC:
    case CountdownFormat.DAY_HOUR_MIN:
      return '60%'
    case CountdownFormat.MIN_SEC:
    case CountdownFormat.DAY_HOUR:
      return '40%'
    case CountdownFormat.SEC:
    case CountdownFormat.DAY:
      return '20%'
    default:
      return '80%'
  }
}
