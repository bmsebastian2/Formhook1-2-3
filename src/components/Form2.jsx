import React from 'react';
import { useForm } from "react-hook-form";

const Form2 = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const watchShowAge = watch("showAge", false); // you can supply default value as second argument
    const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names
    const onSubmit = data => console.log(data);  
    
    
    return (
        <div className="container mt-5">

            <h1>Form2: Hook</h1>


            <form action="" onSubmit={handleSubmit(onSubmit)}>
                
                <input 
                    name ="showAge"
                    type="checkbox"
                    className="form-check-input" 
                    {...register("showAge")} 
                />
                    {/* based on yes selection to display Age Input*/}
                    {watchShowAge && 
                        <input 
                            type="number" 
                            {...register("age", { min: 18, max: 99 })}
                            className="form-control"
                        />
                            
                    }
                    {errors.age && <span>18-99</span>}


                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Nombre"
                    name="nombre"
                    {...register('nombre')}

                />
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Apellido"
                    name="apellido"
                    {...register('apellido')}

                />
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Direccion"
                    name="direccion"
                    {...register('direccion')}

                />
                <button className="btn btn-info" type="submit">enviar</button>
            </form>


            
        </div>
    )
}

export default Form2
