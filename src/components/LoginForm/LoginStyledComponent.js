import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const LoginCardContainer = styled.form`
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 40px;
    max-width: 500px;
  }
`

export const ImageElement = styled.img`
  align-self: center;
  height: 50px;
  width: auto;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const NameLabel = styled.label`
  color: #2d3748;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const UsernameInput = styled.input`
  color: #2d3748;
  font-size: 16px;
  padding: 12px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  background-color: #edf2f7;
  outline: none;
  transition: background-color 0.3s, border-color 0.3s;

  &:focus {
    border-color: #3182ce;
    background-color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const CheckBoxElement = styled.input`
  margin-right: 10px;
  accent-color: #3182ce;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`

export const CheckBoxLabel = styled.label`
  color: #2d3748;
  font-size: 14px;
  padding-left: 5px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3182ce;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #2b6cb0;
    transform: translateY(-2px);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`

export const LinkText = styled.p`
  text-align: right;
  font-size: 14px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`
