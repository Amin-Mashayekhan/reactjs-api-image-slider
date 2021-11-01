import { Fragment } from "react"
import styled from 'styled-components'
export default function SubCard({ imageDetails, changeImage, active}) {
    return (
        // <p>image</p>
        <Fragment>
            <Card src={imageDetails.url} alt="" onClick={() => changeImage(imageDetails.id)} active={active} />
        </Fragment>
    )
}

const Card = styled.img`
    margin: 1px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    background-color: #fefbef;
    cursor: pointer;
    border-radius: 1px;
    border-style: solid;
    border-width: 7px;
    border: solid 7px ${props => props.active ? "lightblue": "transparent"};
    `