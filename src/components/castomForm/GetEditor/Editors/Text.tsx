import { FloatingLabel, Form } from 'react-bootstrap'

const Text = ({header, id}) => {

  return (
    <FloatingLabel
    controlId={id}
    className='mb-3'
    label={
      <>
        {header}       
      </>
    }
  >
    <Form.Control
    type="text"
    autoComplete={'off'}
    placeholder={header}    
  />
  </FloatingLabel>
  )
}

export default Text