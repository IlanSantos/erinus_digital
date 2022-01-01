import Head from "next/head"
import Link from "next/link"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Card } from "../styles/CardPresentation"
export default function Home() {
    return (
        <>
            <Head>
                <title>ERINUS Digital</title>
            </Head>
            <main className="mt-4">
                    <section className="section-presentation mb-4">
                        <Container>
                            <h1>Desenvolvimento de aplicativos e <br /> sistemas para sua empresa</h1>
                            <p>Descomplique suas tarefas com sistemas ou aplicativos feitos sob medida para você.</p>
                        </Container>
                    </section>
                    <section >
                        <Container>
                            <hr></hr>
                            <Row className="g-4 justify-content-between align-items-stretch text-center">
                                <Col lg="6" md="6" sm="12">
                                    <Card>
                                        <h2>Sobre nós</h2>
                                        <p>
                                            Somos uma startup fundada em 31/12/2021 sediada em Salvador, Bahia.
                                            {' '}<Link href="/sobre"><a>Clique aqui</a></Link> para saber mais.
                                        </p>
                                    </Card>
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    <Card>
                                        <h2>Nosso foco</h2>
                                        <p>
                                            Nosso objetivo é ajudar pequenas empresas a facilitar seus processos construindo
                                            aplicações/sistemas com o melhor custo x benefício do mercado.
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
            </main>
        </>
    )
}
