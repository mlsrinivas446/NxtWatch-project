import {Component} from 'react'
import {RiMenuAddFill} from 'react-icons/ri'
import Header from '../Header'
import NavigateItemComponent from '../NavigateItemComponent'
import TrendingCardItem from '../TrendingCardItem'

import EmptySavedVideosView from '../EmptySavedVideosView'

import ReactContext from '../../context/ReactContext'

import {
  TrendingContainer,
  TrendingCardContainer,
  TrendingIconContainer,
  TrendingContentContainer,
  TrendingIcon,
  ImageIcom,
  TrandingHeading,
  TrendingUnorderListCintainer,
} from './savedStyledComponent'

class SavedVideos extends Component {
  render() {
    return (
      <ReactContext.Consumer data-testid="savedVideos">
        {value => {
          const {isDarkMode, savedList} = value

          return (
            <TrendingContainer
              isDarkMode={isDarkMode}
              data-testid="savedVideos"
            >
              <Header />
              <TrendingCardContainer>
                <NavigateItemComponent />
                <TrendingContentContainer isDarkMode={isDarkMode}>
                  {savedList.length === 0 ? (
                    <EmptySavedVideosView />
                  ) : (
                    <>
                      <TrendingIconContainer isDarkMode={isDarkMode}>
                        <TrendingIcon isDarkMode={isDarkMode}>
                          <ImageIcom isDarkMode={isDarkMode}>
                            <RiMenuAddFill />
                          </ImageIcom>
                        </TrendingIcon>
                        <TrandingHeading isDarkMode={isDarkMode}>
                          Saved Videos
                        </TrandingHeading>
                      </TrendingIconContainer>
                      <TrendingUnorderListCintainer>
                        {savedList.map(each => (
                          <TrendingCardItem
                            key={each.id}
                            trendingCardItem={each}
                          />
                        ))}
                      </TrendingUnorderListCintainer>
                    </>
                  )}
                </TrendingContentContainer>
              </TrendingCardContainer>
            </TrendingContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default SavedVideos
