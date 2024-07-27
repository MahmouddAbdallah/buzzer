import React from 'react'
import { StarIcon } from './icons'

const ActiveStars = ({ number }: { number: number }) => {
  return Array(5).fill("").map(
    (_, i) => <StarIcon key={i} className={`${i < number ? 'fill-[#FFBB15]' : "fill-gray-300"}`} />
  )
}

export default ActiveStars