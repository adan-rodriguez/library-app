import { Field, Form, Formik } from "formik";

function LoginPage() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      //   validationSchema={loginSchema}
      onSubmit={async (values) => {
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((r) => setTimeout(r, 1000));
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 2));
        //   localStorage.setItem("credentials", values);
      }}
    >
      {({
        // values,
        // touched,
        // errors,
        // handleChange,
        // handleBlur,
        // handleSubmit,
        isSubmitting,
      }) => (
        <Form>
          <label htmlFor="email">
            Email
            <Field type="email" id="email" name="email" placeholder="Email" />
          </label>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
          {isSubmitting && <p>Login your credentials...</p>}
        </Form>
      )}
    </Formik>
  );
}

export default LoginPage;
