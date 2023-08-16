import { FC } from 'react'

import { Wrapper } from './button.styled'
import Link from 'next/link'
interface ButtonProps {
  buttonText?: string
  link?: string
  externalLink?: boolean
  download?: boolean
  pdf?: string
  width?: string
  onClick?: any
}

const Button: FC<ButtonProps> = ({
  buttonText,
  link,
  externalLink,
  download,
  pdf,
  width
}) => {
  return (
    <Wrapper width={width}>
      {download ? (
        <Link
          href={`${link}`}>
          {/* <div className='btn btn-three'> */}
            <span>{buttonText}</span>
          {/* </div> */}
        </Link>

      ) : (
        <Link href={`${link}`}
          target={externalLink ? '_blank' : ''}
        >
          <div className='btn btn-three'>
            <span>{buttonText}</span>
          </div>
        </Link>
      )}
    </Wrapper>
  )
}

export default Button
