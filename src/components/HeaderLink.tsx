import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    label: string
    to: string
    highlight?: boolean
}

const HeaderLink = (props: Props) => {
  return (
    <Link className={clsx('text-xl font-medium hover:text-primary', { 'text-primary': props.highlight })} {...props}>{props.label}</Link>
  )
}

export default HeaderLink
