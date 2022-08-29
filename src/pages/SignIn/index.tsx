import styles from "./SignIn.module.scss";
import { GoogleLogo } from "phosphor-react";

import { auth } from "../../services/firebase";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useState } from "react";

export function SignIn() {
  const [user, setUser] = useState({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        {user.photoURL && <img src={user.photoURL} alt="User Avatar" />}
        <div>
          <strong>{user.displayName}</strong>
          <small>{user.email}</small>
        </div>
      </div>

      <h1>SignIn</h1>
      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você <br />
        facilita a vida do usuário permitindo utilizar a aplicação sem fazer
        cadastrado.
      </span>

      <button
        type="button"
        className={styles.button}
        onClick={handleGoogleSignIn}
      >
        <GoogleLogo size={24} />
        SignIn with Google
      </button>
    </div>
  );
}
