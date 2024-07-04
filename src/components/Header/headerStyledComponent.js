import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  visibility: visible;
`

export const WebsiteLogo = styled.img`
  width: 13vw;
  height: 5vh;

  @media screen and (max-width: 576px) {
    width: 18vw;
    height: 5vh;
  }
`

export const LargeDeviceContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 20vw;
  }
`

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ContactButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-size: 30px;
`

export const ContactImage = styled.img`
  height: 30px;
  width: 30px;
`

export const HambergerIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  border: ${props =>
    `2px solid ${props.isDarkMode ? '#ffffff' : props.border}`};
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  color: ${props => (props.isDarkMode ? '#ffffff' : props.color)};
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 8px;
  }
`

export const MobileLogoutButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  border-radius: 5px;
  margin-right: 10px;
`

export const PopupLogoutContainer = styled.div`
  width: 90vw;
  height: 30vh;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};

  @media screen and (min-width: 768px) {
    width: 40vw;
    height: 30vh;
  }
`

export const PopupText = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#231f20')};
  font-size: 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const WebsiteButton = styled.button`
  background-color: transparent;
  border: none;
`

export const MobileRoutesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  margin: 0px;
  width: 60vw;
  padding: 0px;
  @media screen and (min-width: 576px) {
    width: 35vw;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 20px;
  outline: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#212121')};
`
