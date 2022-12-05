import { Field, Form, Formik } from "formik";

const LoginPage = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
    //   validationSchema={loginSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(values, null, 2));
        //   localStorage.setItem("credentials", values);
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" placeholder="Email" />
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
};

export default LoginPage;
