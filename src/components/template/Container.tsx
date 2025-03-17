import React from 'react'
import mergeClasses from '@/Utils/mergeClasses'

interface ContainerProps {
  children: React.ReactNode,
  className?: string,
  bigPadding?: boolean,
}

const Container = ({children, className, bigPadding}: ContainerProps) => {
  return (
    <div className={mergeClasses("w-full max-w-screen mx-auto p-4", {"py-20": bigPadding}, className)}>
        {children}
    </div>
  )
}

export default Container