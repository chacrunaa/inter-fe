import "./App.css";
import { Field, Formik, Form } from "formik";
import { createPost } from "./services";
import { authService } from "./auth.service";

function App() {
  const onSubmitPost = async (values) => {
    console.log(values, "onSubmit");
    const response = await createPost(values);

    return response;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            onClick={() => authService.authorizateUser()}
            type="button"
            value="войти"
          />
          <input type="button" value="регистрация" />
        </div>
      </header>
      <h1>INTERVIEW FE</h1>
      <div className="wrapper">
        <Formik
          initialValues={{ title: "", content: "" }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmitPost(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <Field type="text" name="title" placeholder="title" />
              <Field type="text" name="content" placeholder="content" />
              {/* <input type="file" name="image" placeholder="image" /> */}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
