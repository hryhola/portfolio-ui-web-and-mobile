import * as React from "react"
import { SVGProps } from "react"

const FacebookLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#21243D"
      d="M25.605 0H4.395A4.4 4.4 0 0 0 0 4.395v21.21A4.4 4.4 0 0 0 4.395 30h8.847V19.395H9.727V14.12h3.515v-3.574a5.28 5.28 0 0 1 5.274-5.274h5.332v5.274h-5.332v3.574h5.332l-.88 5.274h-4.452V30h7.09A4.4 4.4 0 0 0 30 25.605V4.395A4.4 4.4 0 0 0 25.605 0Z"
    />
  </svg>
)

export default FacebookLogo
