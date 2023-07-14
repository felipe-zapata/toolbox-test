import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useSelector, useDispatch } from 'react-redux'
import { selectFiles, fileListAsync, fileAsync } from '../redux/reducer'

const Selection = () => {
  const list = useSelector(selectFiles).list
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fileListAsync())
  }, [dispatch])

  const listToRender = (list) => {
    if (list?.length > 0) {
      return list.map((fileName, index) => {
        return (
          <option key={index} value={fileName}>{fileName}</option>
        )
      })
    }
  }

  const callFileAsync = (e) => {
    dispatch(fileAsync(e.target.value))
  }

  return (
    <Form.Select className='select' onChange={callFileAsync}>
      <option>Select a file</option>
      {listToRender(list)}
    </Form.Select>
  )
}

export default Selection
