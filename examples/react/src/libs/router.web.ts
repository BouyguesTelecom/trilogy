import { useNavigate } from 'react-router-dom'

export const useRouter = () => {
  const navigate = useNavigate()

  return {
    push: (path: string) => navigate(path.startsWith('/') ? path : `/${path}`),
    back: () => navigate(-1),
  }
}
