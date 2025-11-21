import { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';
export default function Home(){
  const [courses,setCourses]=useState([]);
  useEffect(()=>{API.get('/courses').then(r=>setCourses(r.data)).catch(()=>{});},[]);
  return (<div style={{padding:20}}>
    <h1>Courses</h1>
    <ul>{courses.map(c=> <li key={c._id}><Link to={`/course/${c._id}`}>{c.title}</Link></li>)}</ul>
  </div>);
}
