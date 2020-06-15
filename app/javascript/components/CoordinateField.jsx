import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class CoordinateField extends React.Component {
  constructor(props) {
    super(props)

    let height = 180 //y
    let width = height * 2 //x

    let coef_y = height / 100 // значение одного процента
    let coef_x = width / 100

    let half_coef_y = coef_y / 2 // половина от значения одного процента для вычисления в случае < 50
    let half_coef_x = coef_x / 2

    let point_y = getBoundingClientRect(top) // трекер курсора. передается значение, посчитанное функцией
    let point_x = getBoundingClientRect(left)

    this.state = {}
  }

  // эта функция двигает точку по полю координат
  movePoint() {}

  // componentDidMount — перая функция, нужно, чтобы элемент появился на странице

  // тут надо трекать положение точки относительно поля координат - вычислять left и top
  getBoundingClientRect() {
    // point_x = left
    // point_y = top
    //
    // + эта функция также вычисляет right и bottom - с помощью них можно упростить дальнейшие вычисления...
    // left_x = left
    // right_x = right
    // top_y = top
    // bottom_y =  bottom
  }

  // считаем, сколько процентов составляет left точки от width(x) поля координат
  calculatePercentX(point_x) {
    perc_x = point_x / coef_x
  }

  // считаем, сколько процентов составляет top точки от height(y) поля координат
  calculatePercentY(point_y) {
    perc_y = point_y / coef_y
  }

  // широта — по x(width)
  calculateLatitude(perc_x) {
    if (perc_x < 50) {
      a = (point_x / coef_x) * 2
      b = 100 - a
      latitude = b * half_coef_x * -1
    } else if (perc_x == 50) {
      latitude = 0
    } else if (perc_x > 50) {
      a = perc_x - 50
      latitude = a * half_coef_x
    }

    return latitude
  }

  // долгота — по y(height)
  calculateLongitude(perc_y) {
    if (perc_y < 50) {
      a = (point_y / coef_y) * 2
      b = 100 - a
      longitude = b * half_coef_y * -1
    } else if (perc_y == 50) {
      longitude = 0
    } else if (perc_y > 50) {
      a = perc_y - 50
      longitude = a * half_coef_y
    }

    return longitude
  }

  render() {
    return (
      <div className="CoordinateField">
        <div
          className="Point"
          //onMouseMove={this.handleMouseMove}
        />
      </div>
    )
  }
}
