import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const HomeCardContentContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`

export const HomeBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin-top: 10vh;
  @media screen and (min-width: 768px) {
    margin-top: 10vh;
  }
`
export const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
`

export const UnorderListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 478px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 10px;
  }
`

export const SocialMediaImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8vw;
`

export const PremimunContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  align-self: center;
  margin-bottom: 7px;

  @media screen and (min-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    width: 85vw;
    height: 30vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: 0px;
  }
`

export const BannerDescription = styled.p`
  color: #1e293b;
`

export const GetItNowButton = styled.button`
  color: #1e293b;
  border: 2px solid #1e293b;
  background-color: transparent;
  padding: 8px;
  border-radius: 6px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
`

export const VideoCardsContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 85vw;
    padding: 20px;
    background-color: transparent;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`

export const SearchInput = styled.input`
  color: #94a3b8;
  border: 2px solid #94a3b8;
  background-color: transparent;
  width: 40vw;
  font-size: 20px;
  outline: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media screen and (max-width: 576px) {
    width: 60vw;
  }
`

export const SearchButton = styled.button`
  color: #94a3b8;
  border: 2px solid #94a3b8;
  background-color: transparent;
  width: 10vw;
  font-size: 19px;
  border-left: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`
