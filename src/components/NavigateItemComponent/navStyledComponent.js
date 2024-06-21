import styled from 'styled-components'

export const HomeMenuContainer = styled.div`
  width: 15vw;
  height: 90vh;
  padding: 10px;
  display: none;
  position: fixed;
  left: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  }
`

export const HomeCardContainer = styled.div`
  height: 90vh;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 80vw;
    padding: 20px;
  }
`

export const FilterMemuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`

export const FilterHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const MenuDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#231f20')};
  font-size: 12px;
`

export const ContactHeading = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 14px;
`
