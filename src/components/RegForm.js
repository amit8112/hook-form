import { useState } from "react";
import { useForm } from "react-hook-form";
import React,{useRef} from "react";
import { Form } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

function RegForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const [data, setData] = useState("");

  return (
    <Container style={{ margin: 20 }}>
      <h4 class="ui dividing header">Registration form Hooks </h4>
      <Form
        class="ui form"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>First Name</label>
              <input
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
              )}
            </div>
            <div class="field">
              <label>Last Name</label>
              <input
                {...register("lastName", { required: true })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName?.type === "required" && (
                <p role="alert">Last name is required</p>
              )}
            </div>
          </div>
        </div>

        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>Email </label>
              <input
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"} type="email"
              />
              {errors.mail && <p role="alert">{errors.mail?.message}</p>}
            </div>
            <div class="field">
              <label>Phone</label>
              <input
                {...register("phone", {
                  required: "Phone No is required",
                  maxLength: 10,
                  minLength: 10,
                })}
                aria-invalid={errors.phone ? "true" : "false"} type="number"
              />
              {errors.phone && <p role="alert">{errors.phone?.message}</p>}
            </div>
          </div>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>Male </label>
              <input
                {...register("gender")}
                placeholder="gender name"
                type="radio"
                value="Male"
                required="true"
                id="Male"
              />
              <label>FeMale </label>
              <input
                {...register("gender")}
                placeholder="gender name"
                type="radio"
                value="Female"
                required="true"
                id="Male"
              />
            </div>
            <div class="field">
              <label>Select Country</label>
              <select {...register("Country", { required: true })}>
                <option value="India">India</option>
                <option value="Singapoore">Singapoore</option>
                <option value="Nepal">Nepal</option>
                <option value="United">United State</option>
              </select>
            </div>
            <div class="field">
              <div class="two fields">
                <div class="field">
                  <label>DOB</label>
                  <input
                    {...register("DOB", { required: true })}
                    placeholder="DOB "
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Password</label>
                <input
                  {...register("password", {
                    required: "you must specify a password",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                  name="password"
                  type="password"
                />
                {errors.password && <p>{errors.password.message}</p>}

                <label>Repeat password</label>
                <input
                  {...register("password_repeat", {
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  name="password_repeat"
                  type="password"
                />
                {errors.password_repeat && (
                  <p>{errors.password_repeat.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <p>{data}</p>
        <input type="submit" />
      </Form>
    </Container>
  );
}
export default RegForm;
