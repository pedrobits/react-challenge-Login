import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instruções:
// # Você tem um formulário de login INCOMPLETO
// # Não é permitido adicionar novos elementos HTML
// # Não é permitido usar refs
//
// Tarefas:
// * todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// * todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// * todo - Desabilite o botão de Login equanto você está executando o login.
// * todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// * todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress, setLoginProgress] = useState(false);
  const [erroLogin, setErroLogin] = useState("");

  async function handleSubmit() {
    setLoginProgress(true);

    try {
      setErroLogin("");
      await login({ email, password });
      alert("Login bem-sucedido");
    } catch (error) {
      setErroLogin(error.message);
    } finally {
      setLoginProgress(false);
    }
  }

  function loginValidation(email, password) {
    if (email === "" || password.length < 6 || loginProgress) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        <div className="errorMessage">{erroLogin}</div>
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </div>

        <div className="button">
          <button
            disabled={loginValidation(email, password)}
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
