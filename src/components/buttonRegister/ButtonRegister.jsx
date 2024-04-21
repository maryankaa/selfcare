import './buttonRegister.css';
import {useNavigate} from "react-router-dom";

function ButtonRegister() {
    const navigate = useNavigate();
    function goRegister(){
        navigate('/registration')
    }
    return(
        <div className='button-register'>
            <button className='register' onClick={goRegister}>Записатись!</button>
        </div>
    );
}

export default ButtonRegister;