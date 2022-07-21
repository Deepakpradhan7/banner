import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} banner-card-item`}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button className="btn">Show More</button>
    </li>
  )
}
export default BannerCardItem
