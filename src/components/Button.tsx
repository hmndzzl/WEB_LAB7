import React from 'react'

type Props = {
  label: string
  onClick: (l: string) => void
  cls?: string
}

export const Button = ({ label, onClick, cls = '' }: Props) => (
  <button className={`btn ${cls}`} onClick={() => onClick(label)}>
    {label}
  </button>
)
