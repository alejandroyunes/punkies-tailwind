import { Wrapper } from "../Wrapper/wrapper.styled"
import { TitleContainer } from "./title.styled"

interface TitleProps {
  title: string
  message?: string
}

const Title = ({ title, message }: TitleProps) => {
  return (
    <Wrapper>
      <TitleContainer>
        <h3>{title}</h3>
        <h2>{message}</h2>
      </TitleContainer>
    </Wrapper>

  )
}
export default Title
