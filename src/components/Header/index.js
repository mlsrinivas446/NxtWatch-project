import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {IoSunnyOutline} from 'react-icons/io5'
import {IoIosLogOut, IoMdClose, IoMdMenu, IoMdMoon} from 'react-icons/io'

import SideBarNavItems from '../SideBarNavItems'

import ReactContext from '../../context/ReactContext'

import './index.css'
import {
  HeaderContainer,
  WebsiteLogo,
  LargeDeviceContainer,
  ThemeButton,
  LogoutButton,
  ContactButton,
  ContactImage,
  HambergerIcon,
  MobileContainer,
  MobileLogoutButton,
  PopupLogoutContainer,
  PopupText,
  WebsiteButton,
  MobileRoutesContainer,
  CloseButton,
} from './headerStyledComponent'

const Header = props => {
  const onConfirmLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ReactContext.Consumer>
      {value => {
        const {changeThemeMode, isDarkMode, menuList} = value

        const changeTheme = () => {
          changeThemeMode()
        }

        const themeImage = isDarkMode ? (
          <IoSunnyOutline className="theme-light-icons" />
        ) : (
          <IoMdMoon className="theme-dark-icons" />
        )

        const hambergerIcon = isDarkMode ? (
          <IoMdMenu className="hamberger-icon theme-light-icons" />
        ) : (
          <IoMdMenu className="hamberger-icon theme-dark-icons" />
        )

        const navToHome = () => {
          const {history} = props
          history.replace('/')
        }

        const lodoImgUrl = isDarkMode ? (
          <Link to="/" className="link">
            <WebsiteButton onClick={navToHome}>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            </WebsiteButton>
          </Link>
        ) : (
          <Link to="/" className="link">
            <WebsiteButton onClick={navToHome}>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            </WebsiteButton>
          </Link>
        )

        return (
          <HeaderContainer isDarkMode={isDarkMode}>
            {lodoImgUrl}
            <LargeDeviceContainer>
              <ThemeButton onClick={changeTheme} data-testid="theme">
                {themeImage}
              </ThemeButton>
              <ContactButton>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ContactButton>
              <Popup
                modal
                trigger={
                  <LogoutButton
                    isDarkMode={isDarkMode}
                    color="#3b82f6"
                    border="#3b82f6"
                  >
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
                position="bottom-left"
              >
                {close => (
                  <PopupLogoutContainer isDarkMode={isDarkMode}>
                    <PopupText isDarkMode={isDarkMode}>
                      Are you sure, you want to logout?
                    </PopupText>
                    <div className="popup-button-container">
                      <LogoutButton
                        data-testid="close"
                        color="#7e858e"
                        border="#7e858e"
                        onClick={() => close()}
                      >
                        Cancel
                      </LogoutButton>

                      <LogoutButton
                        bgColor="#3b82f6"
                        color="#ffffff"
                        border="#3b82f6"
                        onClick={onConfirmLogout}
                      >
                        Confirm
                      </LogoutButton>
                    </div>
                  </PopupLogoutContainer>
                )}
              </Popup>
            </LargeDeviceContainer>

            <MobileContainer isDarkMode={isDarkMode}>
              <ThemeButton onClick={changeTheme} data-testid="theme">
                {themeImage}
              </ThemeButton>
              <ContactButton>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ContactButton>
              <Popup
                trigger={
                  <HambergerIcon isDarkMode={isDarkMode}>
                    {hambergerIcon}
                  </HambergerIcon>
                }
                className="popup-content"
                position="bottom right"
              >
                {close => (
                  <MobileRoutesContainer isDarkMode={isDarkMode}>
                    <CloseButton
                      data-testid="close"
                      onClick={() => close()}
                      isDarkMode={isDarkMode}
                    >
                      <IoMdClose />
                    </CloseButton>

                    {menuList.map(each => (
                      <SideBarNavItems
                        key={each.id}
                        linkDetails={each}
                        menuLogo={<each.logo />}
                      />
                    ))}
                  </MobileRoutesContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <MobileLogoutButton
                    isDarkMode={isDarkMode}
                    className="mobile-logout-button"
                  >
                    <IoIosLogOut />
                  </MobileLogoutButton>
                }
                className="popup-content"
                position="bottom-left"
              >
                {close => (
                  <PopupLogoutContainer isDarkMode={isDarkMode}>
                    <PopupText isDarkMode={isDarkMode}>
                      Are you sure, you want to logout?
                    </PopupText>
                    <div className="popup-button-container">
                      <LogoutButton
                        color="#7e858e"
                        border="#7e858e"
                        onClick={() => close()}
                      >
                        Cancel
                      </LogoutButton>

                      <LogoutButton
                        bgColor="#3b82f6"
                        color="#ffffff"
                        border="#3b82f6"
                        onClick={onConfirmLogout}
                      >
                        Confirm
                      </LogoutButton>
                    </div>
                  </PopupLogoutContainer>
                )}
              </Popup>
            </MobileContainer>
          </HeaderContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default withRouter(Header)
