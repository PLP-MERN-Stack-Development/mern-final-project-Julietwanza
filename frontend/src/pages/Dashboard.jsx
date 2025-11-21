import { useEffect, useState } from 'react';
import API from '../services/api';
export default function Dashboard(){
  const [me,setMe]=useState(null);
  useEffect(()=>{ /* optional: load profile */ },[]);
  return (<div style={{padding:20}}>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard.</p>
  </div>);
}
