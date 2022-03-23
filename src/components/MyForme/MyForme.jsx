import React from 'react'
import{Form} from 'react-bootstrap'
import './MyForme.css'

const MyForme = () => {
  return (
    
    <div className='cart'>
<Form.Group className="mb-3">
    <Form.Label className='control'>Disabled input</Form.Label>
    <Form.Control placeholder="Disabled input"  className='control'/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label className='control'> select menu</Form.Label>
    <Form.Select className='control'  >
      <option> select</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Can't check this" className='control' />
  </Form.Group>
    </div>
  )
}

export default MyForme