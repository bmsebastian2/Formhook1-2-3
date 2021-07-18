import React,{useState} from 'react'
import { useForm } from "react-hook-form";

const Form3 = () => {


    const { register, handleSubmit } = useForm();

    const [lstiUsers, setlstiUsers] = useState([])

    const onSubmit = data => {
        console.log('enviado');
        console.log(data);
        setlstiUsers([
            ...lstiUsers,data
        ])
        
    }


    return (
        <div className="container mt-5">

            <h1>Form3, FORM HOOK Y MATRIZ OBJETOS</h1>


            <form action="" onSubmit={ handleSubmit(onSubmit)}>

                <input 
                    type="text" 
                    placeholder="Nombre"
                    className="form-control"
                    name="nombre"
                    {...register('nombre')}
                />
                  <input 
                    type="text" 
                    placeholder="Apellido"
                    className="form-control"
                    name="apellido"
                    {...register('apellido')}
                />


                <button type="submit" className="btn btn-primary">Enviar</button>
                
            </form>

        <ul>
            {lstiUsers.map((a) =>  <li>{a.nombre}</li> )}
        </ul>
            
        </div>
    )
}

export default Form3
