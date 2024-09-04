import { SVGProps } from "react"

const HamburgerMenuLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={20}
    fill="none"
    {...props}
  >
    <path stroke="#21243D" strokeWidth={1.6} d="M0 1h30M0 10h30M0 19h30" />
  </svg>
)

export default HamburgerMenuLogo
