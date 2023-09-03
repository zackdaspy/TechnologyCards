// Write your code here.
import './index.css'

const CardItem = ({id, title, description, imgUrl, className}) => (
  <li className={className} key={id}>
    <img src={imgUrl} alt={title} className="card-image" />
    <h2>{title}</h2>
    <p>{description}</p>
  </li>
)

export default CardItem
