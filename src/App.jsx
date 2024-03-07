import "./App.css";
import { useUserLoginValidator } from "./Validators/UserValidators";

function App() {
  const { register, handleSubmit, errors } = useUserLoginValidator();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <>
          <input type="text" placeholder="Full name" {...register("fullName")} />
          <p>{errors.fullName?.message}</p>
        </>
        <>
          <input type="text" placeholder="Email..." {...register("email")} />
          <p>{errors.email?.message}</p>
        </>
        <>
          <input type="number" placeholder="Age..." {...register("age")} />
          <p>{errors.age?.message}</p>
        </>
        <>
          <input type="password" placeholder="Password..." {...register("password")} />
          <p>{errors.password?.message}</p>
        </>
        <>
          <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>
        </>
        <input type="submit" value="Submit" style={{ width: "50%" }} />
      </form>
    </>
  );
}

export default App;
