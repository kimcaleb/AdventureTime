import React from 'react'

export default (props) => {
  debugger
  return (
    <div className='border'>
      {props.results.map(function (result, index) {
        return (
          <div className='imgcon'>
            <form onSubmit={this.handleSubmit}>
              <h3>{result.name}</h3>
              <p>{result.vicinity}</p>
              <p>{result.rating}, {result.user_ratings_total}</p>
              <img src={`${result.icon}`} />
              <input value='Add Place' type='submit' />
            </form>
          </div>
        )
      })}
    </div>
  )
}
