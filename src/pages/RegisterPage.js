import { Formik, Form, Field } from "formik";

function RegisterPage() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirm: "",
      }}
      //   validationSchema={registerSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        // values,
        // touched,
        // errors,
        // handleChange,
        // handleBlur,
        isSubmitting,
      }) => (
        <Form>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <label htmlFor="confirm">Confirm password</label>
          <Field
            type="password"
            id="confirm"
            name="confirm"
            placeholder="Confirm passsword"
          />
          <button type="submit">Register Account</button>
          {isSubmitting && <p>Sending your credentials...</p>}
        </Form>
      )}
    </Formik>
  );
}

export default RegisterPage;
