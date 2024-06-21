import ReactContext from '../../context/ReactContext'

import {
  EmptySavedContentContainer,
  EmptySavedImage,
  EmptySavedHeading,
  EmptySavedDescription,
} from './styledComponent'

const EmptySavedVideosView = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value

      return (
        <EmptySavedContentContainer isDarkMode={isDarkMode}>
          <EmptySavedImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <EmptySavedHeading isDarkMode={isDarkMode}>
            No saved videos found
          </EmptySavedHeading>
          <EmptySavedDescription isDarkMode={isDarkMode}>
            You can save your videos while watching them
          </EmptySavedDescription>
        </EmptySavedContentContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default EmptySavedVideosView
