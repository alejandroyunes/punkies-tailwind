import { FooterWrapper } from "./footer.styled"

const Footer = () => {

	let date = new Date().getFullYear();

	return (
		<FooterWrapper>
			<p>Punkies y Cerebro {date} </p>
		</FooterWrapper>
	)
}
export default Footer
