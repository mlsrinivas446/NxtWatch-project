import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import ApiFailureView from '../ApiFailureView'
import ReactContext from '../../context/ReactContext'
import Header from '../Header'
import SideBarNavComponent from '../SideBarNavComponent'
import {
  VideoItemDetailsContainer,
  VideoItemCardDetailsContainer,
  VideoItemDetailedCardContainer,
  VideoItemDetailDescription,
  ThumbnillViewsContainer,
  ViewsCount,
  ReviesLikesContainer,
  LikesDisLikesSaveContainer,
  LikeButton,
  DislikeButton,
  SaveButton,
  LikeText,
  DislikeText,
  SaveText,
  HorizontalLine,
  TeamIbContainer,
  TeamLogoImage,
  TeamContentContainer,
  IbText,
  Subscribers,
  Description,
  VideoTitle,
  VideoItemContentContainer,
} from './styledComponents'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoItemDetails: '',
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiConstants.success})

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.status === 200) {
      const formatVideoDetails = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        isSaved: data.isSaved !== undefined ? data.isSaved : false,
        isLike: data.isLike !== undefined ? data.isLike : false,
        isDisLike: data.isDisLike !== undefined ? data.isDisLike : false,
      }
      this.setState({
        videoItemDetails: formatVideoDetails,
        apiStatus: apiConstants.success,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failure})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onSaveChange = onSaveCallback => {
    const {videoItemDetails} = this.state
    const updatedIsSaved = !videoItemDetails.isSaved

    this.setState(
      {
        videoItemDetails: {
          ...videoItemDetails,
          isSaved: updatedIsSaved,
        },
      },
      () => {
        onSaveCallback(videoItemDetails)
      },
    )
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {videoItemDetails} = this.state
          const {
            name,
            profileImageUrl,
            subscriberCount,
            description,
            id,
            publishedAt,
            title,
            videoUrl,
            viewCount,
            isSaved,
            isLike,
            isDisLike,
          } = videoItemDetails

          const {isDarkMode, onSave} = value

          const onLikeFun = () => {
            const updatedIsLike = !videoItemDetails.isLike

            const updatedIsDisLike = updatedIsLike
              ? false
              : videoItemDetails.isDisLike

            this.setState({
              videoItemDetails: {
                ...videoItemDetails,
                isLike: updatedIsLike,
                isDisLike: updatedIsDisLike,
              },
            })
          }

          const onDislikeFun = () => {
            const updatedIsLike = !videoItemDetails.isDisLike
            const updatedIsDisLike = updatedIsLike
              ? false
              : videoItemDetails.isLike

            this.setState({
              videoItemDetails: {
                ...videoItemDetails,
                isLike: updatedIsDisLike,
                isDisLike: updatedIsLike,
              },
            })
          }

          const onSaveFun = () => {
            this.onSaveChange(onSave)
          }

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkMode ? '#ffffff' : '#0b69ff'}
                height="50"
                width="50"
                data-testid="loader"
              />
            </div>
          )

          const renderFailureView = () => (
            <ApiFailureView onApiRetry={this.onApiRetry} />
          )

          const renderSuccessView = () => (
            <VideoItemDetailedCardContainer key={id}>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={videoUrl}
                  width="100%"
                  height="100%"
                />
              </div>
              <VideoItemDetailDescription isDarkMode={isDarkMode}>
                <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                <ReviesLikesContainer>
                  <ThumbnillViewsContainer>
                    <ViewsCount isDarkMode={isDarkMode}>
                      {viewCount} views
                    </ViewsCount>
                    <p className="dot">.</p>
                    <ViewsCount>{publishedAt}</ViewsCount>
                  </ThumbnillViewsContainer>
                  <LikesDisLikesSaveContainer>
                    <LikeButton type="button" onClick={onLikeFun} like={isLike}>
                      <BiLike />
                      <LikeText like={isLike}>Like</LikeText>
                    </LikeButton>
                    <DislikeButton
                      type="button"
                      onClick={onDislikeFun}
                      disLike={isDisLike}
                    >
                      <BiDislike />
                      <DislikeText disLike={isDisLike}>Dislike</DislikeText>
                    </DislikeButton>
                    <SaveButton
                      type="button"
                      onClick={onSaveFun}
                      isSaved={isSaved}
                    >
                      <RiMenuAddFill />
                      <SaveText isSaved={isSaved}>
                        {isSaved ? 'Saved' : 'Save'}
                      </SaveText>
                    </SaveButton>
                  </LikesDisLikesSaveContainer>
                </ReviesLikesContainer>
                <HorizontalLine />
                <TeamIbContainer>
                  <TeamLogoImage src={profileImageUrl} alt="channel logo" />
                  <TeamContentContainer>
                    <IbText isDarkMode={isDarkMode}>{name}</IbText>
                    <Subscribers isDarkMode={isDarkMode}>
                      {subscriberCount} subscribers
                    </Subscribers>
                    <Description isDarkMode={isDarkMode}>
                      {description}
                    </Description>
                  </TeamContentContainer>
                </TeamIbContainer>
              </VideoItemDetailDescription>
            </VideoItemDetailedCardContainer>
          )

          const renderApiViews = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiConstants.success:
                return renderSuccessView()
              case apiConstants.failure:
                return renderFailureView()
              case apiConstants.progress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <VideoItemDetailsContainer isDarkMode={isDarkMode}>
              <Header />
              <VideoItemCardDetailsContainer>
                <SideBarNavComponent />
                <VideoItemContentContainer>
                  {renderApiViews()}
                </VideoItemContentContainer>
              </VideoItemCardDetailsContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
