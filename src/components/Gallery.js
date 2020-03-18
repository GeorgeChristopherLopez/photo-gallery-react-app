import React, { Fragment, useState } from 'react';
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
import photo01 from '../photos/01.jpg';
import photo02 from '../photos/02.jpg';
import photo03 from '../photos/03.jpg';
import photo04 from '../photos/04.jpg';
import photo05 from '../photos/05.jpg';
import photo06 from '../photos/06.jpg';
import photo07 from '../photos/07.jpg';
import photo08 from '../photos/08.jpg';
import photo09 from '../photos/09.jpg';
import photo10 from '../photos/10.jpg';
import photo11 from '../photos/11.jpg';
import photo12 from '../photos/12.jpg';
import Images from '../components/Images';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';



function Gallery(props) {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedIndex , setSelectedIndex] = useState(0);
   const allImages =
        [
        {
                src: photo01,
                tag: "Hay Bales",
            caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
            thumbnail: thumbnail01
        },
        {
            src: photo02,
            tag: "Lake",
            caption: "The lake was so calm today. We had a great view of the snow on the mountains from here.",
            thumbnail: thumbnail02
        },
        {
            src: photo03,
            tag: "Canyon",
            caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
            thumbnail: thumbnail03
        },
        {
            src: photo04,
            tag: "Iceberg",
            caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
            thumbnail: thumbnail04
        },
        {
            src: photo05,
            tag: "Desert",
            caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
            thumbnail: thumbnail05
        },
        {
            src: photo06,
            tag: "Fall",
            caption: "Fall is coming, I love when the leaves on the trees start to change color.",
            thumbnail: thumbnail06
        },
        {
            src: photo07,
            tag: "Plantation",
            caption: "I drove past this plantation yesterday, everything is so green!",
            thumbnail: thumbnail07
        },
        {
            src: photo08,
            tag: "Dunes",
            caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
            thumbnail: thumbnail08
        },
        {
            src: photo09,
            tag: "Countryside Lane",
            caption: "We enjoyed a quiet stroll down this countryside lane. ",
            thumbnail: thumbnail09
        },
        {
            src: photo10,
            tag: "Sunset",
            caption: "Sunset at the coast! The sky turned a lovely shade of orange.",
            thumbnail: thumbnail10
        },
        {
            src: photo11,
            tag: "Cave",
            caption: "I did a tour of a cave today and the view of the landscape below was breathtaking.",
            thumbnail: thumbnail11
        },
        {
            src: photo12,
            tag: "Bluebells",
            caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
            thumbnail: thumbnail12
        }
        ];
    const [images, setImages] = useState(allImages);
    
    const searchTerm = props.searchTerm;
    function toggleModal (e) {
        // this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
        const item = !modalIsOpen;
        
        let imgArr = searchTerm != null ? allImages.filter(thumbnail => thumbnail.tag.toLowerCase().includes(props.searchTerm.toLowerCase()) || thumbnail.caption.toLowerCase().includes(props.searchTerm.toLowerCase())) : allImages;

        setImages(images => imgArr);

        console.log(e.target);
        let x = (e.target.getAttribute("value"));
        setSelectedIndex(selectedIndex =>x);
        setModalIsOpen(modalIsOpen => item);

       
    };

   
   
    if (props.searchTerm != props.prevSearch) {
        console.log("new Search: " + props.searchTerm, "old search: " + props.prevSearch);
      
    }
        
    return (
        <Fragment>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={toggleModal}>
                        <Carousel views={images} currentIndex={selectedIndex}  />
                    </Modal>
                ) : null}
            </ModalGateway>

          


            
            <GalleryDiv className="Gallery">

                <Images
                    images={images} toggleModal={toggleModal} searchTerm={searchTerm}
            />

            </GalleryDiv>


                 
        
            </Fragment>



   
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
padding: 2rem;

${customMedia.greaterThan('tablet')`
    grid-template-columns: 1fr 1fr;  
    `}
${customMedia.greaterThan('laptop')`
    grid-template-columns: 1fr 1fr 1fr 1fr;  
    `}
`
