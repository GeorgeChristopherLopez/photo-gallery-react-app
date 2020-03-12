import React from 'react';
import thumbnail01 from '../photos/thumbnails/01.jpg';
import thumbnail02 from '../photos/thumbnails/02.jpg';
import thumbnail03 from '../photos/thumbnails/03.jpg';
import thumbnail04 from '../photos/thumbnails/04.jpg';
import thumbnail05 from '../photos/thumbnails/05.jpg';
import thumbnail06 from '../photos/thumbnails/06.jpg';
import thumbnail07 from '../photos/thumbnails/07.jpg';
import thumbnail08 from '../photos/thumbnails/08.jpg';
import thumbnail09 from '../photos/thumbnails/09.jpg';
import thumbnail10 from '../photos/thumbnails/10.jpg';
import thumbnail11 from '../photos/thumbnails/11.jpg';
import thumbnail12 from '../photos/thumbnails/12.jpg';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

function Gallery() {

    return (
        <GalleryDiv className="Gallery">
            <img style={imgStyle} src={thumbnail01} />  
            <img style={imgStyle} src={thumbnail02} />  

            <img style={imgStyle} src={thumbnail03} />  
            <img style={imgStyle} src={thumbnail04} />  
            <img style={imgStyle} src={thumbnail05} />  
            <img style={imgStyle} src={thumbnail06} />  
            <img style={imgStyle} src={thumbnail07} />  
            <img style={imgStyle} src={thumbnail08} />  
            <img style={imgStyle} src={thumbnail09} />  
            <img style={imgStyle} src={thumbnail10} />
            <img style={imgStyle} src={thumbnail11} />
            <img style={imgStyle} src={thumbnail12} />  

        </GalleryDiv>
    );
}

export default Gallery;

// MEDIA QUERY
const customMedia = generateMedia({
    desktop: '1440px',
    laptop: '1024px',
    tablet: '768px',
    mobile: '320px',
});


const GalleryDiv = styled.div`
display: grid;
grid-template-columns: 1fr;
margin: 5%;

grid-gap: 2rem;
${customMedia.greaterThan('tablet')`
    grid-template-columns: 1fr 1fr;  
    `}
${customMedia.greaterThan('laptop')`
    grid-template-columns: 1fr 1fr 1fr 1fr;  
    `}


`

const imgStyle = {
    width: '100%',
    textAlign: 'center'
}