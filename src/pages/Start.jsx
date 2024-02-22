import "../assets/styles/chomsky.css"
import {useEffect, useState} from "react";
import {validateSintax} from "../utils/sintax_parser.js";
import G from '../assets/image/Icono-Language.svg'

const Start=()=>{

    const [codeContent, setCodeContent]= useState("")
    const [stackInfo, setStackInfo] = useState([]);


    useEffect(() => {
        const originalConsoleLog = console.log;
        console.log = (...args) => {
            originalConsoleLog(...args);
            setStackInfo(prevLogs => [...prevLogs, args.join(' ')]);
        };
        return () => {
            console.log = originalConsoleLog;
        };
    }, []);

    const handlerCodeText=(e) =>{
        setCodeContent(e.target.value)
    }


    const handleCheck = (e) =>{
        e.preventDefault();
        setStackInfo([])
        validateSintax(codeContent)
    }

    return (
        <>
            <header>
                <div className="name-language-program">
                    <img src={G} alt="" className='garrick-icon'/>
                    <h1 className='garrick-name'>Garrick</h1>
                </div>
            </header>
            <section className="data-code-pila">z
                <div className="comparation">
                    <div className="data-coding">
                        <form className='code'>
                            <h2 className='subtitle-code'>Ingrese el codigo</h2>
                            <textarea className='txtCode-2' name="Code" id="" cols="30" rows="10" onChange={handlerCodeText}/>
                            <button className='option' onClick={handleCheck}>Verificar</button>
                        </form>
                    </div>
                    <div className="data-pila">
                        <form action="">
                            <h2 className='subtitle-code'>Verificación</h2>
                            <textarea className='txtArea-code' contentEditable={"false"} name="code" cols="30" rows="10" value={stackInfo.join('\n')}></textarea>
                            {/* <button className='borrar' >Limpiar</button> */}
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div className="name-language-container">
                    <img src={G} alt="" className='garrick-icon'/>
                    <h1 className='garrick-name'>Garrick</h1>
                </div>
            </footer>
        </>
    )
}

export default Start