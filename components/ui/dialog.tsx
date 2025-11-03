"use client"

import React, { createContext, useContext, useState, type ReactNode, cloneElement, isValidElement } from "react"

interface DialogContextValue {
  open: boolean
  setOpen: (v: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

interface DialogProps {
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Dialog({ children, open: controlledOpen, defaultOpen, onOpenChange }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(defaultOpen ?? false)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = (v: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(v)
    }
    onOpenChange?.(v)
  }

  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>
}

interface DialogTriggerProps {
  children: ReactNode
  asChild?: boolean
}

export function DialogTrigger({ children, asChild }: DialogTriggerProps) {
  const ctx = useContext(DialogContext)
  if (!ctx) return null

  const handleClick = () => ctx.setOpen(true)

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      onClick: (e: any) => {
        ;(children as any).props?.onClick?.(e)
        handleClick()
      },
    } as any)
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  )
}

interface DialogContentProps {
  children: ReactNode
  className?: string
}

export function DialogContent({ children, className }: DialogContentProps) {
  const ctx = useContext(DialogContext)
  if (!ctx || !ctx.open) return null

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) ctx.setOpen(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onBackdropClick} />
      <div
        role="dialog"
        aria-modal="true"
        className={
          "relative z-10 w-full mx-4 rounded-lg border border-border bg-background p-6 shadow-lg " + (className ?? "")
        }
      >
        {children}
      </div>
    </div>
  )
}

export function DialogHeader({ children }: { children: ReactNode }) {
  return <div className="space-y-2 mb-2">{children}</div>
}

export function DialogTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={"font-semibold text-lg " + (className ?? "")}>{children}</h2>
}

export function DialogDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={"text-muted-foreground " + (className ?? "")}>{children}</div>
}
