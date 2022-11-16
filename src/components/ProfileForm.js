import { useForm } from "react-hook-form";

const ProfileForm = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="placeholder">
          Firstname:
          <input
            className="input"
            type="text"
            name="firstname"
            {...register("firstname", { required: true, minLength: 3 })}
          />
          {errors.firstname?.type==="required" && (
            <div className="error">Enter your firstname</div>
          )}
          {errors.firstname?.type==="minLength" && (
            <div className="error">Min length of firstname is 3 </div>
          )}
        </label>

        <label className="placeholder">
          Lastname:
          <input
            className="input"
            type="text"
            name="lastname"
            {...register("lastname", { required: true, minLength: 3 })}
          />
          {errors.lastname?.type==="required" && (
            <div className="error">Enter your lastname</div>
          )}
          {errors.lastname?.type==="minLength" && (
            <div className="error">Min length of lastname is 3 </div>
          )}
        </label>

        <label className="placeholder">
          Country:
          <select name="country" {...register("country")}>
            <option value="ua">Ukraine</option>
            <option value="usa">USA</option>
            <option value="pl">Poland</option>
          </select>
        </label>

        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
