import React, { useState } from 'react'

function Header() {
  const [counts,setCounts]=useState(100)

  function haritha()
  {
      setCounts(counts+1)
  }
  return (
    <div>
      <button onClick={haritha}>Increment</button>
      <span>{counts}</span>
    </div>
  )
}

export default Header