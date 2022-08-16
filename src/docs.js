 useEffect(
        async()=>{
            const response= await getRedirectResult(auth)
            if(response){
                createUserDocumentFromAuth(response.user)
            }

        },[]
    )


    const FormInput=({label,...otherProps})=>{
    return(<div className='group'>
                <input
                className='form-input'
                otherProps 
                required/>
                
                <label className={`${otherProps.value.length ?'shrink':''} form-input-label`}>{label}</label>
                
    </div>)
}
export default FormInput
