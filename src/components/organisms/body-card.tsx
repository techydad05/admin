import React from "react"
import { useScroll } from "../../hooks/use-scroll"
import Button from "../fundamentals/button"
import Actionables, { ActionType } from "../molecules/actionables"

type BodyCardProps = {
  title?: string
  subtitle?: string
  events?: {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  }[]
  actionables?: ActionType[]
}

const BodyCard: React.FC<BodyCardProps> = ({
  title,
  subtitle,
  events,
  actionables,
  children,
}) => {
  const { isScrolled, scrollListener } = useScroll()
  return (
    <div className="rounded-rounded border bg-grey-0 border-grey-20 h-full overflow-hidden flex flex-col min-h-[500px] w-full medium:w-1/2 relative">
      {isScrolled && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-grey-0 to-transparent h-xlarge z-10" />
      )}
      <div
        className="pt-large px-xlarge flex-grow overflow-y-scroll"
        onScroll={scrollListener}
      >
        <div className="flex items-center justify-between">
          {title ? (
            <h1 className="inter-xlarge-semibold text-grey-90">{title}</h1>
          ) : (
            <div />
          )}
          <Actionables actions={actionables} />
        </div>
        {subtitle && (
          <h3 className="inter-small-regular pt-1.5 text-grey-50">
            {subtitle}
          </h3>
        )}
        <div className="my-large">{children}</div>
      </div>
      {events && events.length > 0 ? (
        <div className="pb-large pt-base px-xlarge border-t border-grey-20">
          <div className="flex items-center flex-row-reverse">
            {events.map((event, i: React.Key) => {
              return (
                <Button
                  key={i}
                  onClick={event.onClick}
                  className="ml-xsmall justify-center"
                  variant={i === 0 ? "primary" : "ghost"}
                  size={"small"}
                >
                  {event.label}
                </Button>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="min-h-[24px]" />
      )}
    </div>
  )
}

export default BodyCard