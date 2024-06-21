import styled from 'styled-components'

export const GamesContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const GamesCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
    width: 85vw;
  }
`

export const GamesIconContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#313131' : '#f1f1f1')};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8vh;
  width: 100vw;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    height: 15vh;
    width: 85vw;
  }
`

export const GamesContentContainer = styled.div`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
    margin-top: 0px;
  }
`

export const GamesIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#cbd5e1')};
`

export const ImageIcon = styled.p`
  font-size: 25px;
  color: #ff0000;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    color: #ff0000;
  }
`

export const GamesHeading = styled.h1`
  font-size: 25px;
  padding-left: 10px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#212121')};

  @media screen and (min-width: 768px) {
    font-size: 25px;
    padding-left: 10px;
    color: ${props => (props.isDarkMode ? '#ffffff' : '#212121')};
  }
`

export const GamesUnorderListContainer = styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: cenetr;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 85vw;
    align-items: flex-start;
  }
`
