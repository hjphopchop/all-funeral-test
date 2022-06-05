import React, { FC } from 'react'

interface SubmenuProps {
    children: React.ReactNode
}
const Submenu:FC<SubmenuProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Submenu