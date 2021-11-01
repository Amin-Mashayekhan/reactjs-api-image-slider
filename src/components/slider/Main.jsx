import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImageRequest from '../../utils/ImageRequest'
import SubCard from './SubCard'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Main() {

    const [errorMessage, setErrorMessage] = useState(null)
    const [images, setImages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedImageId, setSelectedIamgeId] = useState(null)

    useEffect(() => {
        ImageRequest(`/search?limit=5&page=${currentPage}&order=DESC`).then((response) => {
            setImages(response.data);
            setSelectedIamgeId(response.data[0].id);
        });
    }, [currentPage])



    const changeImage = (imageId) => {
        setSelectedIamgeId(imageId)
    }

    const selectedImageSrc = () => {
        if (images[0]) {
            if (selectedImageId) {
                let result = images.filter(image => image.id === selectedImageId)[0];
                if (result) {
                    return result.url;
                } else {
                    return `${window.origin}/assets/images/defaultImage.jpg`;
                }
            } else {
                return images[0].url;
            }
        } else {
            return `${window.origin}/assets/images/defaultImage.jpg`;
        }
    }


    return (
        <Container>
            <SelectedImageId src={selectedImageSrc()} alt="catf" />
            <Wrraper>
                <FaArrowCircleLeft size="21px" style={{ "cursor": "pointer" }} onClick={() => { ((currentPage - 1) > 0) ? setCurrentPage(currentPage - 1) : setErrorMessage(`You have reached the first page and can't go to the previous page anymore.`)}} />
                {
                    images.map(image => (
                        <SubCard key={image.id} imageDetails={image} changeImage={changeImage} active={selectedImageId === image.id} />
                    ))
                }
                <FaArrowCircleRight size="21px" style={{ "cursor": "pointer" }} onClick={() => { setCurrentPage(currentPage + 1); setErrorMessage(null); }} />
            </Wrraper>
            <ErrorMessage>
                {errorMessage && errorMessage}
            </ErrorMessage>
        </Container>
    )
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    width: 100%;
    height: 80vh;
    min-height: 650px;
    background-color: #fefbef;
`

const Wrraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 700px;
    margin: 2rem auto;
`

const SelectedImageId = styled.img`
    margin: 5px;
    width: 576px;
    height: 420px;
    object-fit: cover;
    background-color: #fefbef;
    border-radius: 14px;
`

const ErrorMessage = styled.p`
    color: red;
    font-size: 19px;
`