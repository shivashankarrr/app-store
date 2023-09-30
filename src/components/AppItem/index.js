// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="icon" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}
export default AppItem
