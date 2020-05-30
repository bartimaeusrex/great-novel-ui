import React from 'react'

export default ({ id, title, firstName, lastName }) => (
  <div key={id} className="novel">
    {`${title} by ${firstName} ${lastName}`}
  </div>
)
