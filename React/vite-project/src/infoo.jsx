import React from 'react'

const infoo = ({name, surname, ward}) => {
  return (
    <div>
      <strong> Name: </strong> Shasanka Acharya<br></br>
      <strong> Location: </strong> Bardiya<br></br>
     <p> Name is {name} {surname} and live in ward {ward}.</p>

    </div>
  )
}

export default infoo
