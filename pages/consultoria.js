import Head from 'next/head'
import { Col, Container} from "react-bootstrap";
import ContactForm from "../components/ContactForm";
export default function Orcamento(){

    return(
        <>
            <Head>
                <title>ERINUS | Orçamento</title>
            </Head>
            <Container className="mt-4">
                <section className=" d-flex align-items-baseline row-cols-2">
                    <Col>
                        <div>
                            <h1>Consultoria</h1>
                            <p>Para solicitar uma consultoria, basta preencher o formulário ao lado e entraremos em contato com você.</p>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div>
                            <ContactForm />
                        </div>
                    </Col>
                </section>
            </Container>
        </>
    )
}