import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);

  return (
    <>
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>sign-in</button>
    </>
  );
}
