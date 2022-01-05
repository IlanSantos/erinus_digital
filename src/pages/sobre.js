import Head from "next/head";
import Image from "next/image";
import { Col } from "react-bootstrap";

export default function Sobre(){
    return (
        <>
            <Head>
                <title>ERINUS | Sobre</title>
            </Head>
            <main className="container mt-4">
                <section className="slide-left">
                    <h1 className="title">Sobre a ERINUS</h1>
                    <Col lg="8" md="8">
                        <p className="description">
                            Somos uma startup fundada em 01/01/2022 com o objetivo de
                            ser uma produtora/desenvolvedora de sistemas/aplicações sob demanda baseados em web.
                        </p>
                    </Col>
                </section>
                <h3 className="title mb-2">Tecnologia que trabalhamos</h3>
                <p className="description">
                    Abaixo estão as tecnologias que utilizamos para desenvolver nossos aplicativos.
                </p>
                <div className="col-md-8 col-lg-6 g-4 d-flex flex-wrap justify-content-start align-items-center">
                    <Col md="4" xs="12">
                        <Image alt="postgresql icon" src="/postgresql-icon.svg" width={128} height={128} />
                    </Col>
                    <Col md="4" xs="12">
                        <Image alt="postgresql icon" src="/nodejs-icon.svg" width={128} height={128} />
                    </Col>
                    <Col md="4" xs="12">
                        <Image alt="postgresql icon" src="/react-icon.svg" width={128} height={128} />
                    </Col>
                </div>
            </main>
        </>
    )
}