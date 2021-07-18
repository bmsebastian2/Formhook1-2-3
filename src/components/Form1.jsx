import React, {useState} from 'react'

export const Form1 = () => {
    
    const [people, setpeople] = useState('')
    
    const hanDle = (e) =>{

        setpeople(
            {
                ...people,[e.target.name] : e.target.value
            }
        )

    }
    const sendP = (e) =>{
        e.preventDefault()
        
        let usuario = {
            nombre : e.target.nombre.value,
            apellido : e.target.nombre.value,
            direccion : e.target.direccion.value
        }
        console.log(usuario);

    }   
    
    return (
        <div className="container mt-5">

            <h1>Form1: con onSubmit y onChange</h1>

            <form action="" onSubmit={sendP}>

                <input
                className="form-control" 
                    type="text" 
                    placeholder="ingrese nombre"
                    name="nombre"
                    onChange={hanDle}
                    />
                <input 
                className="form-control"
                    type="text" 
                    placeholder="ingrese apellido"
                    name="apellido"
                    onChange={hanDle}               
                    />
                <input 
                className="form-control"
                    type="text" 
                    placeholder="ingrese direccion"
                    name="direccion"
                    onChange={hanDle}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>


            </form>


            
        </div>
    )
}
