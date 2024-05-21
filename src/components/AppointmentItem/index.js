import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {apmntDetail, onChngStarOnState} = props
  const {id, title, date, isStarred} = apmntDetail
  const dateTxt = format(new Date(date), 'dd MMMM yyyy,EEEE')
  const onChangestar = () => {
    onChngStarOnState(id)
  }
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-card">
      <div className="tit-img">
        <p className="list-head">{title}</p>
        <button
          type="button"
          className="str-btn"
          data-testid="star"
          onClick={onChangestar}
        >
          <img className="list-img" src={imgUrl} alt="star" />
        </button>
      </div>
      <p className="date-style">Date: {dateTxt}</p>
    </li>
  )
}

export default AppointmentItem
