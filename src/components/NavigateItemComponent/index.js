import LinkMenuItems from '../LinkMenuItems'

import './index.css'

import ReactContext from '../../context/ReactContext'

import {
  HomeMenuContainer,
  FilterMemuItemsContainer,
  SocialMediaContainer,
  MenuDescription,
  ContactHeading,
} from './navStyledComponent'

const NavigateItemComponent = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode, menuList} = value

      return (
        <HomeMenuContainer isDarkMode={isDarkMode}>
          <FilterMemuItemsContainer>
            {menuList.map(each => (
              <LinkMenuItems
                key={each.id}
                linkDetails={each}
                menuLogo={<each.logo />}
              />
            ))}
          </FilterMemuItemsContainer>
          <SocialMediaContainer>
            <ContactHeading isDarkMode={isDarkMode}>CONTACT US</ContactHeading>
            <div className="sociel-media-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
                className="media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
                className="media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
                className="media-logo"
              />
            </div>
            <MenuDescription isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </MenuDescription>
          </SocialMediaContainer>
        </HomeMenuContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default NavigateItemComponent
