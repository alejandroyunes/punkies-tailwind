import Link from 'next/link'
import { ButtonContainer } from './button.styled'

interface ButtonProps {
  buttonText: string
  link: string
  externalLink: boolean
}

export default function DownloadButton({ buttonText, link, externalLink }: ButtonProps) {

  return (
    <ButtonContainer>
      <Link href={`${link}`} target={externalLink ? '_blank' : ''}>
        <span>{buttonText}</span>
      </Link>
    </ButtonContainer>
  )
}
