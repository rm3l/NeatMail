import { cn } from "@/lib/utils"

interface EmptyStateProps {
  title?: string
  description?: string
  width?: number | string
  height?: number | string
  className?: string
  imageClassName?: string
  action?: React.ReactNode
}

export function EmptyState({
  title,
  description,
  width = 240,
  height = 240,
  className,
  imageClassName,
  action,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-12 text-center",
        className
      )}
    >
      <img
        src="/no-mail.svg"
        alt="No data available"
        width={width}
        height={height}
        className={cn("shrink-0 opacity-80", imageClassName)}
      />

      {title && (
        <h3 className="text-lg font-medium tracking-tight text-foreground">
          {title}
        </h3>
      )}

      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}

      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
