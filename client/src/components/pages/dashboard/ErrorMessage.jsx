import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ErrorMessage = ({ errors }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false)
    }, 3000)
    return () => {
      clearTimeout(timeId)
    }
  }, [])

  if (!show) {
    return null;
  }

  const errorMessages = errors.map((err) => (
    <Typography key={err}>{err}</Typography>
  ))

  return (
    <>
      {errorMessages}
    </>
  )
}

export default ErrorMessage