import React from 'react'
import type { FC } from 'react'
import { useForm } from "react-hook-form";

interface Props {
}

const SignUp: FC<Props> = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
  return (
    <div>
        <h1>signup form</h1>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username", { required: true })} />
            {errors.username && <span>This field is required</span>}

            <input type="password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            <input type="submit" />
            </form>

        </div>
    </div>
  )
}

export default SignUp