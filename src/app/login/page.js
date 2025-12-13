"use client"
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push(`/login/${route}`);
  };

  return (
    <div style={{width: '100%'}}>
      <header className="">
        <h1 style={{margin:0}}>Login</h1>
      </header>

      <p>page</p>

      <div>
        <button onClick={() => navigate("loginStudent")}>
          Go to Login Student
        </button>
      </div>
    </div>
  );
};

export default Login;