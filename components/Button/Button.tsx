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
        <div className='btn btn-three'>
          <Link
            href={`${pdf}`}>
            <span>{buttonText}</span>
          </Link>
        </div>
      ) : (
        <div className='btn btn-three'>
          <Link href={`${link}`} target={externalLink ? '_blank' : ''}>
            <span>{buttonText}</span>
          </Link>
        </div>
      )}
    </Wrapper>
  )
}

export default Button
