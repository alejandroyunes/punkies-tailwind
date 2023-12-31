import { Wrapper } from "../Wrapper/wrapper.styled"
import { TitleContainer } from "./title.styled"

interface TitleProps {
  title: string
  message?: string
  id?: string
}

const Title = ({id, title, message }: TitleProps) => {
  return (
    <Wrapper id={id}>
      <TitleContainer>
        <h2>{title}</h2>
        {/* <h3>{message}</h3> */}
      </TitleContainer>
    </Wrapper>

  )
}
export default Title
