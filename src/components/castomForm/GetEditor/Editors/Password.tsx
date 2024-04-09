import { FloatingLabel, Form } from 'react-bootstrap'

const Password = ({header, id}) => {

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
    type="password"
    autoComplete={'off'}
    placeholder={header}    
  />
  </FloatingLabel>
  )
}

export default Password