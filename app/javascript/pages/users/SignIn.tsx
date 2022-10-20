import React, { useEffect } from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

interface Props {
  errors: string
}

const SignIn: FC<Props> = ({errors}) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<{username: string, password: string}>();
  const onSubmit = (data) => {
    Inertia.post("/sessions", {user: data});
  };

  return (
    <div>
      <h1>sign in</h1>
      <div>
        {JSON.stringify(errors)}
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
