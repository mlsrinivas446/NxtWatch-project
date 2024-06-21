import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ebebeb')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCardContainer = styled.form`
  height: 50vh;
  width: 80vw;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  box-shadow: 0 3px 5px #475569;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    height: 70vh;
    width: 40vw;
    background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
    box-shadow: 0 3px 5px #475569;
    border-radius: 7px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`

export const ImageElement = styled.img`
  align-self: center;
  height: 7vh;
  width: 40vw;
  @media screen and (min-width: 768px) {
    height: 8vh;
    width: 20vw;
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  background-color: transparent;
`

export const NameLabel = styled.label`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
  font-size: 15px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
    font-size: 25px;
    font-weight: 500;
  }
`

export const UsernameInput = styled.input`
  color: ${props => (props.isDarkMode ? '#475569' : '#475569 ')};
  font-size: 18px;
  padding: 5px;
  border-color: 1px solid #475569;
  outline: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    color: ${props => (props.isDarkMode ? '#475569' : '#475569 ')};
    font-size: 25px;
    padding: 5px;
    border-color: 1px solid #475569;
    outline: none;
    background-color: transparent;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckBoxElement = styled.input`
  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
    font-size: 25px;
  }
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 15px;
  padding-left: 5px;

  @media screen and (min-width: 768px) {
    color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
    font-size: 25px;
    padding-left: 7px;
  }
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  padding: 10px;
  border-radius: 8px;
  margin-top: 3px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
