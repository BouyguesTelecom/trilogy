import { useCallback, useEffect } from 'react'

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const stableCallback = useCallback(callback, [callback])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        stableCallback()
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref, stableCallback])
}
