// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="app-item">
      <button type="button">
        <img src={imageUrl} alt={appName} className="icon" />
        <h1 className="app-heading">{appName}</h1>
      </button>
    </li>
  )
}
export default AppItem
