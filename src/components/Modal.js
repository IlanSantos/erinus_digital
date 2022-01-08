import Image from "next/image"
import { Button } from "react-bootstrap"
import { ModalBody, ModalFooter, ModalHeader, ModalStyled } from "../styles/ModalStyle"

const Modal = ({handleClose, show, title, description, iconType}) => {
    const classModal = show ? "modal-default-show" : "modal-default-hide"
    let icon = ""
    if(iconType === "success"){
        icon = "/icon-success.svg"
    }else if(iconType == "error"){
        icon = "/icon-error.svg"
    }
    return (
        <div className={classModal}>
            <ModalStyled>
                <ModalHeader>
                    ERINUS Digital
                </ModalHeader>
                <ModalBody className="mt-3">
                    <div>
                        {
                            iconType ? <Image src={icon} draggable="false" alt="Ícone de sucesso" layout="responsive" width="100%" height="20%" /> : null
                        }
                    </div>
                    <p className="fs-4 mt-4 text-center">{description}</p>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-danger" onClick={handleClose}>Fechar</Button>
                </ModalFooter>
            </ModalStyled>
        </div>
    )
}

export default Modal