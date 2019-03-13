import { connect } from 'react-redux'
import { setColor } from '../../store/actions'
import MyColor from '../todoDemo/color'

const mapStateToProps = state => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onclick: (color) => {
        console.log(color)
        if(color === '#ccc'){
            color = '#000'
        }else if(color === '#000'){
            color = '#CDDC39'
        }else{
            color = '#ccc'
        }
      dispatch(setColor(color))
    }
  }
}

const MyColorPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyColor)

export default MyColorPage