import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, displayThumbnailImageUrl, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = thumbnailItem

  const onClickThumbnailUrl = () => {
    displayThumbnailImageUrl(imageUrl, imageAltText)
  }

  const activeThumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-container">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickThumbnailUrl}
          className={activeThumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
