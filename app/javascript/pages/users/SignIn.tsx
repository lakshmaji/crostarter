import React, { useEffect } from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

interface Props {
  errors: Array<Record<string, string>>
}

const SignIn: FC<Props> = ({errors}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: formErrors },
    setError
  } = useForm<{username: string, password: string}>();
  const onSubmit = (data) => {
    Inertia.post("/sessions", {user: data});
  };

  useEffect(() => {
    if(errors) {
      if (Object.keys(errors).length) {
        
        errors.forEach((err, i) => {
          const key = Object.keys(err).toString()
          setError(key as 'username' | 'password',  {type: "manual", message: err[key]})
      })
      }
    }
  }, [errors])


  return (
    <div>
      <h1>sign in</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", { required: "provide user name" })} />
          {formErrors.username && <span>{formErrors?.username?.message}</span>}

          <input
            type="password"
            {...register("password", { required: "provide password" })}
          />
          {formErrors.password && <span>{formErrors?.password?.message}</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
