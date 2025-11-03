"use client"

import type { HTMLAttributes, ReactNode } from "react"
import React from "react"

export function Card({ className = "", children, ...props }: { className?: string; children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={(
        "rounded-xl border border-border bg-card text-card-foreground shadow " + className
      ).trim()}
      {...props}
    >
      {children}
    </div>
  )}

export default Card
