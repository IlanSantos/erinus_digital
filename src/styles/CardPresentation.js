import styled from 'styled-components'

const default_color = "#00135b"

export const Card = styled.div`
    display: block;
    max-width: 100%;
    height: 100%;
    border-bottom: 3px solid ${default_color}};
    a{
        color: inherit;
        font-weight: 500;
    }
`