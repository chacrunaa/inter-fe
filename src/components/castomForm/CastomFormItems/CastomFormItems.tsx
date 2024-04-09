import GetEditor from '../GetEditor/GetEditor'

const CastomFormItems = ({inputs}) => {
    console.log(inputs);
    
  return (
    inputs?.map(item=><GetEditor key={item.id} input={item}/>)    
  )
}

export default CastomFormItems