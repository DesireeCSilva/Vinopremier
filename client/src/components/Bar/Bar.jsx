import React from 'react'
import PriceFilter from '../PriceFilter/PriceFilter'
import TypeFilter from '../TypeFilter/TypeFilter'

function Bar() {
  return (
    <div className="siderbar">
      <PriceFilter />
      <TypeFilter />
    </div>
  )
}

export default Bar
