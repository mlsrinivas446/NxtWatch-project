import styled from 'styled-components'

export const FilterHomeContainer = styled.li`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  width: 60vw;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isActive ? '#f1f5f9' : null)};
  background-color: ${props =>
    props.isDarkMode && props.isActive ? ' #181818' : null};
  @media screen and (min-width: 576px) {
    width: 35vw;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 15vw;
    background-color: ${props => (props.isActive ? '#f1f5f9' : null)};
    background-color: ${props =>
      props.isDarkMode && props.isActive ? ' #181818' : null};
  }
`
export const MenuOptions = styled.p`
  padding-left: 20px;
  color: ${props => {
    const {isActive, isDarkMode} = props
    if (isActive) {
      return isDarkMode ? '#ffffff' : '# #181818'
    }
    return isDarkMode ? '#94a3b8' : '#1e293b'
  }};
  font-weight: ${props => {
    const {isActive} = props
    if (isActive) {
      return 600
    }
    return 400
  }};
  font-size: 15px;
`

export const MenuLogo = styled.span`
  font-size: 20px;
  color: ${props => {
    const {isDarkMode, isActive} = props
    if (isActive) {
      return '#ff0000'
    }
    return isDarkMode ? '#94a3b8' : '#231f20'
  }};
`
