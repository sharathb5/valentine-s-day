"use client"

interface MenuItemProps {
  courseNumber: string
  courseLabel: string
  dishName: string
  memoryLabel: string
  description: string
  onClick: () => void
}

export function MenuItem({
  courseNumber,
  courseLabel,
  dishName,
  memoryLabel,
  description,
  onClick,
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left py-5 transition-colors hover:bg-primary/[0.03] rounded px-3 -mx-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`View details for ${dishName}`}
    >
      <p className="font-display text-xs tracking-[0.3em] uppercase text-primary opacity-70 mb-1">
        {courseNumber} — {courseLabel}
      </p>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-lg text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
          {dishName}
        </span>
        <span className="flex-1 border-b border-dotted border-foreground/30 mx-1 mb-1 min-w-[2rem]" />
        <span className="font-serif text-sm italic text-primary whitespace-nowrap">
          {memoryLabel}
        </span>
      </div>
      <p className="font-serif text-sm text-muted-foreground mt-1 leading-relaxed">
        {description}
      </p>
    </button>
  )
}
