import React from "react";
import PropTypes from "prop-types";
import { Form } from "reactstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  age: yup.number()
  .required()
  .positive()
  .integer(),
});

function Todos(props) {
  const {register, handleSubmit, errors} = useForm({
    validationSchema: SignupSchema
  });

  const onSubmit= (data) => {
    console.log (data);
  }

  return (
    <div>
      <h2>Todos Form</h2>
      <Form onSubmit = {handleSubmit(onSubmit)}>
          <input type="text" placeholder="email" name ="email" ref={register}/>
          <div>
            <label>Age</label>
            <input type="text" name="age" ref={register} />
            {errors.age && <p>{errors.age.message}</p>}
          </div>
          <input type="password" placeholder="Password" name ="password" ref={register({required: "PASSWORD REQUIRED", minLength: {value:8, message: "TOO SHORT"}})} />
          {/* {errors.password && <p>{errors.password.message}</p>} */}
          <input type="submit" />
      </Form>
    </div>  
  );
}

Todos.propTypes = {};

export default Todos;
