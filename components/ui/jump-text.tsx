"use client"

import React from "react"

interface JumpTextProps {
  text: string
  className?: string
  delayStep?: number
}

export default function JumpText({ text, className = "", delayStep = 35 }: JumpTextProps) {
  const characters = Array.from(text)

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-200 group-hover:animate-g-jump hover:animate-g-jump"
          style={{
            animationDelay: `${index * delayStep}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}
