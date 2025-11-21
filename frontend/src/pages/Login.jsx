import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function doLogin(e){
    e.preventDefault();
    const res = await API.post('/auth/login',{ email, password });
    localStorage.setItem('token', res.data.token);
    nav('/dashboard');
  }
  return (<div style={{padding:20}}>
    <h1>Login</h1>
    <form onSubmit={doLogin}>
      <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} /> <br/>
      <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /> <br/>
      <button>Login</button>
    </form>
  </div>);
}
