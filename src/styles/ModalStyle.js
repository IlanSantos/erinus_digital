import styled from "styled-components"


export const ModalStyled = styled.div`
    position: relative;
    width: 80%;
    max-width: 500px;
    margin: 1.75rem auto;
    border-radius: .375rem;
    z-index: 99999;
    background-color: white;
    overflow: hidden;
    filter: drop-shadow(1px 1px 3px rgba(0,0,0,.200));
    animation: modal-slide 800ms;
    @keyframes modal-slide{
        from{
            margin: 0 auto;
            opacity: .6;
        }to{
            opacity: 1;
        }
    }
`

export const ModalHeader = styled.header`
    padding: .75rem;
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
    background-color: var(--default-color-blue);
`

export const ModalBody = styled.main`
    padding: .75rem;
    height: 100% !important;
    p{
        margin-bottom: 0;
    }
`

export const ModalFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: .75rem;
`