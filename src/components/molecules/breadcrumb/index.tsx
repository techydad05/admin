import React from "react"
import ChevronRightIcon from "../../fundamentals/icons/chevron-right"
import clsx from "clsx"
import { navigate } from "gatsby"

type BreadcrumbProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  previousRoute?: string
  previousBreadcrumb?: string
  currentPage: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  previousRoute = "/a/settings",
  previousBreadcrumb = "Settings",
  currentPage,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "w-full flex items-center inter-small-semibold",
        className
      )}
      {...props}
    >
      <span
        className="text-violet-60 cursor-pointer"
        onClick={() => navigate(previousRoute)}
      >
        {previousBreadcrumb}
      </span>
      <span className="text-grey-50 mx-0.5">
        <ChevronRightIcon size={16} />
      </span>
      <span>{currentPage}</span>
    </div>
  )
}

export default Breadcrumb
