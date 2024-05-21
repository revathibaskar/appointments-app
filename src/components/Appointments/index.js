import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppoinmentsList = []

class Appointments extends Component {
  state = {appointmentsList: initialAppoinmentsList, title: '', date: ''}

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prev => ({
      appointmentsList: [...prev.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  showAllStarred = () => {
    const {appointmentsList} = this.state
    const filterList = appointmentsList.filter(each => each.isStarred === true)
    this.setState({appointmentsList: filterList})
  }

  onChngStarOnState = id => {
    this.setState(prev => ({
      appointmentsList: prev.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentsList, date, title} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-card">
            <form onSubmit={this.onAddAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <label className="label-style" htmlFor="title">
                TITLE
              </label>{' '}
              <br />
              <input
                className="input-style"
                id="title"
                placeholder="Title"
                onChange={this.onChangeTitle}
                value={title}
              />{' '}
              <br />
              <label className="label-style" htmlFor="date">
                DATE
              </label>{' '}
              <br />
              <input
                className="input-style"
                id="date"
                type="date"
                onChange={this.onChangeDate}
                value={date}
              />{' '}
              <br />
              <button type="submit" className="btn-style">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img-style"
            />
          </div>
          <hr />
          <div className="btm-container">
            <h1 className="btm-heading">Appointments</h1>
            <button
              type="button"
              className="starred-btn"
              onClick={this.showAllStarred}
            >
              Starred
            </button>
          </div>
          <ul className="list-container">
            {appointmentsList.map(each => (
              <AppointmentItem
                apmntDetail={each}
                key={each.id}
                onChngStarOnState={this.onChngStarOnState}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
