// import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Main from './slider/Main'
export default function Home() {

    return (
        <Container>
            <Wrraper>
               <Main />
            </Wrraper>
        </Container>
    )
}

const Wrraper = styled.div`
    max-width: 700px;
    margin: 2rem auto;
`

const Container = styled.main`
    padding-top: 70px;
    width: 100%;
    height: 80vh;
    min-height: 650px;
    background-color: #fefbef;
`