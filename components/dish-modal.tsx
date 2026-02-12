"use client"

import { useEffect, useCallback } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { HeartDivider } from "./animal-illustrations"

export interface DishData {
  courseNumber: string
  courseLabel: string
  dishName: string
  memoryLabel: string
  description: string
  insideNote: string
  memoryText: string
  location: string
  date: string
  photoSrc: string
  photoAlt: string
}

interface DishModalProps {
  dish: DishData | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  currentIndex: number
  total: number
}

export function DishModal({ dish, onClose, onNext, onPrev, currentIndex, total }: DishModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    },
    [onClose, onNext, onPrev]
  )

  useEffect(() => {
    if (dish) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [dish, handleKeyDown])

  if (!dish) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${dish.dishName}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-md bg-background border-2 border-primary/30 shadow-xl animate-in fade-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-primary hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Course label */}
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary opacity-70 mb-2">
            {dish.courseNumber} — {dish.courseLabel}
          </p>

          {/* Dish title */}
          <h2 className="font-display text-2xl text-primary mb-6">{dish.dishName}</h2>

          {/* Photo */}
          <div className="relative aspect-[4/5] bg-secondary/50 border border-primary/20 mb-6 overflow-hidden">
            <Image
              src={dish.photoSrc}
              alt={dish.photoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 420px"
              priority
            />
          </div>

          <HeartDivider className="w-40 mx-auto text-primary mb-6" />

          {/* Memory text */}
          <p className="font-serif text-base text-foreground leading-relaxed text-center italic mb-6">
            {dish.memoryText}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-serif mb-8">
            <span>{dish.location}</span>
            <span>{dish.date}</span>
            <span>{"∞ / 10"}</span>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between border-t border-primary/20 pt-6">
            <button
              onClick={currentIndex === 0 ? onClose : onPrev}
              className="font-display text-sm tracking-wide uppercase text-primary hover:text-foreground transition-colors px-3 py-1"
            >
              {currentIndex === 0 ? "Back to Menu" : "Previous"}
            </button>
            <span className="font-serif text-xs text-muted-foreground">
              {currentIndex + 1} of {total}
            </span>
            <button
              onClick={currentIndex === total - 1 ? onClose : onNext}
              className="font-display text-sm tracking-wide uppercase text-primary hover:text-foreground transition-colors px-3 py-1"
            >
              {currentIndex === total - 1 ? "Back to Menu" : "Next Dish →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
