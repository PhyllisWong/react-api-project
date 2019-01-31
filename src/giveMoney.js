import React from 'react'

const Money = (props) => {

  return (
    <div>
      <h1>Current Balance!</h1>
      <p>${props.funds}</p>
      {props.funds < 0 && 
        <strong>You owe us ${props.funds * -1}</strong>
      }
    </div>
  )
}
export default Money