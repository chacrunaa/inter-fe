import  { lazy } from 'react'

const ControllerEditor = {
    text: lazy(()=> import ('@components/castomForm/GetEditor/Editors/Text')),
    password: lazy(()=> import ('@components/castomForm/GetEditor/Editors/Password')),
}

const GetEditor = ({input}) => {

const Component = ControllerEditor[input?.type] || controlledComponents.text;


  return (
    Component && <Component {...input}/>
  )
}

export default GetEditor