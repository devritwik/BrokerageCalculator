
import './InputField.css'

function InputField({name, setValue}){
    return (
        <div className='InputField'>
            <label>{name}</label>
            <input type="number" min="0" placeholder="0" onChange=
            {(e)=>{
                if(e.target.value == ''){
                    setValue(0);
                }else{
                    setValue(parseInt(e.target.value));
                }
                }
            }></input>
        </div>
    );
}

export default InputField;