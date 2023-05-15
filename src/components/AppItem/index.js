import './index.css'

const AppItem = props => {
  const {each} = props
  const {appName, imageUrl, category} = each
  return (
    <li className="li1">
      <img src={imageUrl} alt={appName} className="img1" />
      <p className="paragraph">{appName}</p>
    </li>
  )
}
export default AppItem
