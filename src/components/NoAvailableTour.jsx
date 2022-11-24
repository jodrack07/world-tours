import React from 'react'
import { PrimaryButton } from './Button'

export default function NoAvailableTour({ onClick }) {
  return (
    <div className='no-available-tours'>
        <h1>No Available Tour</h1>
        <PrimaryButton onClick={onClick}>Reload Tours</PrimaryButton>
    </div>
  )
}
