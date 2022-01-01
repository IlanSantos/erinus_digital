import { Button, Col, FormControl, FormLabel, Row } from 'react-bootstrap'
import {useForm } from 'react-hook-form'


const ContactForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data)
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                <Col>
                    <FormLabel htmlFor="client_name">Nome</FormLabel>
                    <FormControl type='text' {...register("client_name")} placeholder="Ex: José Antônio Pereira das Neves" required></FormControl>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <FormLabel htmlFor="client_email">E-mail</FormLabel>
                    <FormControl type='email' {...register("client_email")} placeholder="Ex: jose@gmail.com"></FormControl>
                </Col>
            </Row>
            <Button type="submit" className="btn-padrao">Enviar</Button>
        </form>
    )
}

export default ContactForm