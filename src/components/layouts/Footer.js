import Link from "next/link"
import {FooterContainer} from "../../styles/FooterStyle"
const Footer = () => {

    return (
        <FooterContainer>
            <div>
                <p className="footer-description">Desenvolvido por <Link href="/"><a><b>ERINUS Digital</b></a></Link></p>
            </div>
        </FooterContainer>
    )

}
export default Footer