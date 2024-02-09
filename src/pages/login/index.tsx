import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "derekcrosslu@gmail.com", password: "dc9822" },
      }}
    />
  );
};
