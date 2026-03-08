import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport every child with class
 * "reveal" gets class "visible" added (enabling CSS transitions).
 */
export function useRevealGroup(threshold = 0.12) {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reset reveal classes on route change
    el.querySelectorAll('.reveal').forEach(child => {
      child.classList.remove('visible')
    })

    // Small delay so the page transition can finish first
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.reveal').forEach(child => {
              child.classList.add('visible')
            })
            observer.unobserve(el)
          }
        },
        { threshold }
      )

      observer.observe(el)
      return () => observer.disconnect()
    }, 600)

    return () => clearTimeout(timer)
  }, [threshold, location.pathname])

  return ref
}
