import { useState } from 'react'
import { Button, Col, FormControl, FormLabel, Row } from 'react-bootstrap'
import {useForm } from 'react-hook-form'
import api from '../services/api'
import Modal from './Modal'

const ContactForm = () => {
    const {register, handleSubmit} = useForm()
    const [showModal, setShowModal] = useState(false)
    const [modalInfo, setModalInfo] = useState({})
    const onSubmit = async data => {
        try{
            const request = await api.post("/api/contato", data)
            setModalInfo({title: "Sucesso!", description: request.data.message, icon: "success"})
            setShowModal(true)
        }catch(error){
            if(error.response){
                setModalInfo({title: "Erro!", description: error.response.data.message, icon: "error"})
                setShowModal(true)
            }
            else{
                setModalInfo({title: "Erro!", description: error.toString(), icon: "error"})
                setShowModal(true)
            }
        }
    }
    const handleCloseModal = () => {
        setShowModal(false)
        setModalInfo({})
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
            <Button type="submit" className="btn-default-green">Enviar</Button>
            
            <Modal className="slide-top" show={showModal} handleClose={handleCloseModal} title={modalInfo.title}
            description={modalInfo.description} iconType={modalInfo.icon} />
        </form>
    )
}

export default ContactForm