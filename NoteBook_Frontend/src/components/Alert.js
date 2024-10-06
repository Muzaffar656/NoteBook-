import React from 'react'

function Alert(props) {
  return (
    <>
 { props.alert &&  <div className="alert alert-warning position-sticky top-0 alert-dismissible fade show z-index" role="alert">
  <strong>{props.alert.type}</strong>{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
    </>
  )
}

export default Alert