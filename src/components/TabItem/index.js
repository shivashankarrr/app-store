// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabItem
  const activeClassName = isActive ? 'tab-btn' : ''
  const onChangeTab = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-name ${activeClassName}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
