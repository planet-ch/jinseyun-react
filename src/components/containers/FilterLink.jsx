import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions'
import Link from '../todoDemo/Link'

const FilterLink = connect(
  (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter
    }
  },
  (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }
)(Link)

export default FilterLink