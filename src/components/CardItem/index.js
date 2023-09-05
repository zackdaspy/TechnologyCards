// Write your code here.
import './index.css'

// eslint-disable-next-line prettier/prettier
const CardItem = ({ id, title, description, imgUrl, className }) => (
  <li className={className} key={id}>
    <div className="title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <img src={imgUrl} alt={title} className="card-image" />
  </li>
)

export default CardItem
