import './index.css'

const TabItem = props => {
  const {each, onChangesApp, isButtonActive} = props
  const {tabId, displayText} = each

  const onChanges = () => {
    onChangesApp(tabId)
  }
  const forStyle = isButtonActive ? 'for-button' : ''
  return (
    <li className="li">
      <button className={`button ${forStyle}`} onClick={onChanges}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
