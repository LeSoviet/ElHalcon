"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
  distance?: number
  once?: boolean
  threshold?: number
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  distance = 50,
  once = true,
  threshold = 0.1,
}: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Determine the initial position based on the direction
  let initial = { opacity: 0 }
  if (direction === "up") initial = { ...initial, y: distance }
  if (direction === "down") initial = { ...initial, y: -distance }
  if (direction === "left") initial = { ...initial, x: distance }
  if (direction === "right") initial = { ...initial, x: -distance }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      })
      if (once) {
        setHasAnimated(true)
      }
    }
  }, [isInView, controls, delay, duration, hasAnimated, once])

  return (
    <motion.div ref={ref} initial={initial} animate={controls} className={className}>
      {children}
    </motion.div>
  )
}
