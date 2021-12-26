import React from 'react'
import styled from 'styled-components'
import Profile from './Profile';
import img1 from "./images/user.png";
import img2 from "./images/Deadpixel62.png"

const MyBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  
  justify-content: center;
  align-items: center;
  width: 70vw;
  padding: 10px;
`;

const handle = (name) => {
  alert(name);
};

function Container() {
    return (
      <MyBody>
        <Profile
          fullName="Med B"
          bio="The Dead Pixel"
          profession="Aspiring Web Developer"
          handleName={handle}
        >
          <img src={img2} />
        </Profile>

        <Profile handleName={handle}>
          <img src={img1} />
        </Profile>

        <Profile handleName={handle}>
          <img src={img1} />
        </Profile>

        <Profile handleName={handle}>
          <img src={img1} />
        </Profile>
      </MyBody>
    );
}

export default Container
