import './form-input.style.scss'
const FormInput=({label,onChange,name,value,type})=>{
    return(<div className='group'>
                <input
                className='form-input'
                type={type}
                onChange={onChange}
                name={name}
                value={value} 
                required/>
                
                <label className={`${value.length ?'shrink':''} form-input-label`}>{label}</label>
                
    </div>)
}
export default FormInput

//  <label htmlFor="">Display Name</label>
//                 <input type="text" 
//                 onChange={onChangeHandler} 
//                 name="displayName" 
//                 value={formFields.displayName} 
//                 required/>