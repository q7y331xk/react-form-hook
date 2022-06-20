import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from 'styles/home/login.module.scss';

interface LoginUser {
  userName: string;
  userPassword: string;
}

export default function Login() {
  const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onChange" });
  const valid = async (loginUser: LoginUser) => {
    console.log(loginUser);
  }
  const invalid = async (error) => {
    console.log(error);
  }
  console.log(errors);
  
  return <>
    <form className={styles.form} onSubmit={handleSubmit(valid,invalid)}>
      <input type="text" className={`${styles.inputText} ${errors.userName ? styles.validError : ""}`} placeholder='ID' {...register("userName", {
        minLength: {
          value: 5,
          message: "userName must be longer than 5 characters"
        }
      })}></input>
      <input type="password" placeholder='PW' className={`${styles.inputPassword} ${errors.userPassword ? styles.validError : ""}`} {...register("userPassword")}></input>
      <input type="submit" className={styles.btnLogin} value='로그인' />
    </form>
  </>
}