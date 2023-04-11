import React from 'react'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return <div className='flex min-h-screen flex-col'>{children}</div>
}
