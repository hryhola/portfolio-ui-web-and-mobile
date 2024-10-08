import * as React from "react"
import { SVGProps } from "react"
const LinkedInLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#21243D"
      d="M25.605 0H4.395A4.4 4.4 0 0 0 0 4.395v21.21A4.4 4.4 0 0 0 4.395 30h21.21A4.4 4.4 0 0 0 30 25.605V4.395A4.4 4.4 0 0 0 25.605 0Zm-15 23.79H7.09V11.483h3.515V23.79Zm0-14.063H7.09V6.21h3.515v3.516ZM22.91 23.789h-3.515v-7.031A1.76 1.76 0 0 0 17.637 15a1.76 1.76 0 0 0-1.758 1.758v7.031h-3.516V11.484h3.516v.663c.92-.286 1.52-.663 2.637-.663 2.384.003 4.394 2.142 4.394 4.67v7.635Z"
    />
  </svg>
)
export default LinkedInLogo
