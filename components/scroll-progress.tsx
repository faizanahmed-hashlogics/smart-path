"use client"

import { useEffect, useRef } from "react"

// A super-smooth, GPU-accelerated top progress bar that reflects page scroll position.
// Uses rAF batching to avoid layout thrashing and lag.
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const docEl = document.documentElement

    const calcProgress = () => {
      const scrollTop = docEl.scrollTop || document.body.scrollTop
      const scrollHeight = docEl.scrollHeight || document.body.scrollHeight
      const clientHeight = docEl.clientHeight
      const denom = Math.max(scrollHeight - clientHeight, 1)
      return Math.min(Math.max(scrollTop / denom, 0), 1)
    }

    const update = () => {
      const p = calcProgress()
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${p})`
      }
      ticking.current = false
    }

    const onScrollOrResize = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(update)
      }
    }

    // Initialize immediately for initial position
    update()

    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)
    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [])

  return (
    <div
      aria-hidden
      ref={barRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: "100%",
        backgroundColor: "var(--primary)",
        transform: "scaleX(0)",
        transformOrigin: "0% 50%",
        transition: "transform 80ms linear",
        willChange: "transform",
        zIndex: 1030,
        pointerEvents: "none",
      }}
    />
  )
}
