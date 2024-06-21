import styled from 'styled-components'

export const EmptySavedContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  padding: 30px;
  height: 90vh;
`

export const EmptySavedImage = styled.img`
  height: 40vh;
  width: 60vw;

  @media screen and (min-width: 576px) {
    height: 40vh;
    width: 50vw;
  }

  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 35vw;
  }

  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 30vw;
  }
`

export const EmptySavedHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#181818')};
  font-size: 20px;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`

export const EmptySavedDescription = styled.p`
  color: #475569;
  text-align: center;
`
