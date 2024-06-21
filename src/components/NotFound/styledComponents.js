import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingCardContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`
export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  padding: 30px;
`

export const TrendingUnorderListCintainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotFoundImage = styled.img`
  height: 50vh;
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

export const NotFoundHeading = styled.h1`
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

export const NotFoundDescription = styled.p`
  color: #475569;
  text-align: center;
`
