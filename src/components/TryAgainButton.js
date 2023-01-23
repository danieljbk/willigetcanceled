import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export const TryAgainButton = () => {
  return (
    <Link to='/'>
      <Button
        variant='primary'
        style={{
          backgroundColor: '#DC143C',
          borderColor: '#DC143C',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        Try Again
      </Button>
    </Link>
  )
}
