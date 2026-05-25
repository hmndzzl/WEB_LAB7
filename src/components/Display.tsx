import React from 'react'

type Props = {
  value: string
}

export const Display = ({ value }: Props) => (
  <div className='display'>{value}</div>
)
