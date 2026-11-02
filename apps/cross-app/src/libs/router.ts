export interface Router {
  push: (path: string) => void
  back: () => void
}

export declare const useRouter: () => Router
