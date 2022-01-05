import { Button, Col, FormControl, FormLabel, Row } from 'react-bootstrap'
import {useForm } from 'react-hook-form'
import api from '../services/api'

const ContactForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = async data => {
        try{
            await api.post("/api/contato", data)
            console.log("Nova solicitação realizada")
        }catch(error){
            if(error.response) console.log(error.response.data.message)
            else console.log(error)
        }
    }
    
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