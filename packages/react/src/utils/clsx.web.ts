export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | bigint
  | null
  | boolean
  | undefined

export interface ClassDictionary {
  [id: string]: any
}

export type ClassArray = ClassValue[]

function toVal(mix: ClassValue): string {
  let str = ""

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix
  } else if (typeof mix === "object" && mix !== null) {
    if (Array.isArray(mix)) {
      const len = mix.length
      for (let k = 0; k < len; k++) {
        if (mix[k]) {
          const y = toVal(mix[k])
          if (y) {
            str && (str += " ")
            str += y
          }
        }
      }
    } else {
      for (const key in mix) {
        if (mix[key]) {
          str && (str += " ")
          str += key
        }
      }
    }
  }

  return str
}

export function clsx(...inputs: ClassValue[]): string {
  let str = ""
  for (let i = 0; i < inputs.length; i++) {
    const tmp = inputs[i]
    if (tmp) {
      const x = toVal(tmp)
      if (x) {
        str && (str += " ")
        str += x
      }
    }
  }
  return str
}

export default clsx
