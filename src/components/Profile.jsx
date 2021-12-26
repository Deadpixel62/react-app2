import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'



const Mycontainer = styled.div`
  width: 24vw;
  height: 46vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 10% 18% 43% 36% / 19% 34% 55% 33%;
  box-shadow: 2.7px 2.3px 5.3px rgba(0, 0, 0, 0.028),
    9.2px 7.8px 17.9px rgba(0, 0, 0, 0.042), 41px 35px 80px rgba(0, 0, 0, 0.07);
  background-image: linear-gradient(
    to right bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`;





function Profile(props) {
    const handleAlert = (e) => {
      props.handleName(props.fullName);
    };

    return (
      <Mycontainer>
        {props.children}
        <div>
          <p>{props.fullName}</p>
          <p>{props.bio}</p>
          <p>{props.profession}</p>
        </div>
        <button onClick={handleAlert}> <span>Click Me</span> </button>
      </Mycontainer>
    );
}


Profile.defaultProps = {
  fullName: "Jon Doe",
  bio: `I'm an aspiring fullStack Web Developer`,
  profession: 'Full Time learner'
 

}

Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  handleName: propTypes.func
}

export default Profile


