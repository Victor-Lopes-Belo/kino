import React from 'react'
import mergeClasses from '@/Utils/mergeClasses'

interface WrapProps {
  children: React.ReactNode,
    className?: string,
}

const Wrap = ({children, className}: WrapProps) => {
  return (
    <div className={mergeClasses("w-full overflow-hidden", className)}>
        {children}
    </div>
  )
}

export default Wrap