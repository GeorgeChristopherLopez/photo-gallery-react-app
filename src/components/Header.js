import React, { useState, Component } from 'react';


import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';


function Header()  {
    const [classes, setClasses] = useState(['dropdown-content']);

    function dropdownHandler(e) {
        if (!classes.includes('show')) {
            const item = 'show';
            console.log(item);
            setClasses(classes => [...classes, item]);

        }
    }

    function closeHandler(e) {
        if (classes.includes('show')) {
            const item = 'dropdown-content';
            console.log(item);
            setClasses(classes => [item]);

        }
    }

    return (
      
        <div style={headerStyle} className="header">
            <div className="logo"><h4>Photo Gallery</h4></div>
                <div style={{ display: 'grid', justifyContent: 'end' }}>                
                    <SearchButton
                        
                        onMouseOver={dropdownHandler}>Search
                    </SearchButton>
            </div>
            <DropdownDiv className={classes.join(' ')}> <div style={{ cursor: 'pointer', float: 'right' }} onClick={closeHandler}>X</div>
                <h4>Search for Pictures by Tag</h4>
                <input style={{ padding: '.5rem' }} />
            </DropdownDiv>
        </div>
       
     
    );
}

export default Header;

// MEDIA QUERY
const customMedia = generateMedia({
    desktop: '1440px',
    laptop: '1024px',
    tablet: '768px',
    mobile: '320px',
});

const headerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '1rem',
    borderBottom: '1px solid black',
   
}


const DropdownDiv = styled.div`
   padding: 2rem;
    border: 1px solid black;
    display: none;
    position: absolute;
    border: 1px solid black;
    padding: 2rem;
   top:5rem;
    left: 40%;
    text-align: center;
    background: #fff;
`

const SearchButton = styled.span`
    color: blue;
    cursor: pointer;
    background: cyan;
    border: 1px solid black;
    padding: .5rem;
    border-radius: 3rem;
    width: 5rem;
    z-index:10;
    height: 2.5rem;
   
     &:hover ~ ${DropdownDiv} {
        display: block;

      }
`

const ContainerDiv = styled.div`


`