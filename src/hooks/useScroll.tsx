import { useState, useEffect } from 'react'

function useScroll() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset
      setScroll(currentPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}

export default useScroll
