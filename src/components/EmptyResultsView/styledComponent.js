import styled from 'styled-components'

export const EmptyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  padding: 30px;
  height: 70vh;
`

export const EmptyImage = styled.img`
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

export const EmptyHeading = styled.h1`
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

export const EmptyDescription = styled.p`
  color: #475569;
  text-align: center;
`

export const EmptyRetryButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 20px;
  border: none;
  padding: 8px;
  border-radius: 7px;
`
