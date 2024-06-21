import {Link, withRouter} from 'react-router-dom'

import './index.css'

import {FilterHomeContainer, MenuOptions, MenuLogo} from './linkStyledComponent'

import ReactContext from '../../context/ReactContext'

const LinkMenuItems = props => (
  <ReactContext.Consumer>
    {value => {
      const {linkDetails, menuLogo} = props
      const {id, text, linkText} = linkDetails
      const {location} = props
      const isActiveCheck = location.pathname === linkText

      const {isDarkMode, navMenuStyle} = value

      const setStyleToMenuItem = () => {
        navMenuStyle(id)
      }

      return (
        <Link to={linkText} className="link">
          <button
            className="link-button"
            onClick={setStyleToMenuItem}
            type="button"
          >
            <FilterHomeContainer
              key={id}
              isActive={isActiveCheck}
              isDarkMode={isDarkMode}
            >
              <MenuLogo isDarkMode={isDarkMode} isActive={isActiveCheck}>
                {menuLogo}
              </MenuLogo>
              <MenuOptions isDarkMode={isDarkMode} isActive={isActiveCheck}>
                {text}
              </MenuOptions>
            </FilterHomeContainer>
          </button>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default withRouter(LinkMenuItems)
