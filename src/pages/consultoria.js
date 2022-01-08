import Head from 'next/head'
import Image from 'next/image';
import { Col, Container} from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Modal from '../components/Modal';
export default function Orcamento(){

    return(
        <main>
            <Head>
                <title>ERINUS | Consultoria</title>
            </Head>
            <Container className="mt-4">
                <section className="row align-items-baseline row-cols-lg-2">
                    <Col>
                        <div>
                            <h1 className="title">Consultoria</h1>
                            <p className="fs-4">Para solicitar uma consultoria, basta preencher o formulário e entraremos em contato com você.</p>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div>
                            <ContactForm />
                        </div>
                    </Col>
                </section>
                <section>
                    <Col lg="8">
                        <Image src="/steps-dev.svg" alt="steps icon" layout="responsive" quality={100} height="30%" width="100%"/>
                    </Col>
                </section>
            </Container>
        </main>
    )
}