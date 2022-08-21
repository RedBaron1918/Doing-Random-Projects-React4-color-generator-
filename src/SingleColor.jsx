import React, { useState, useEffect } from 'react'


const SingleColor = ({rgb,weight,index,hex}) => {
  const [alert, setAlert] = useState(false)
  const backgorund = rgb.join(',')
  const hexhash = `#${hex}`

  return (
    <article className= {`color ${index > 9 && 'color-light'}` } style={{backgroundColor:`rgb(${backgorund})`}} onClick={()=>{
      setAlert(true)
      setTimeout(()=>{
        setAlert(false)
      }
      ,3000)
      navigator.clipboard.writeText(hexhash)

    }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexhash}</p>
      {alert && <p className='alert'>copied</p>}
    </article>
  )
}

export default SingleColor