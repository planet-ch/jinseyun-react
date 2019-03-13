import React from 'react'
import PropTypes from 'prop-types'

const MyColor = ({ color,onclick }) => (
  <div style={{background: color,width: '200px',height: '200px'}} onClick={e=>{
    onclick(color)
  }}></div>
)

MyColor.propTypes = {
  color: PropTypes.string.isRequired
}

export default MyColor