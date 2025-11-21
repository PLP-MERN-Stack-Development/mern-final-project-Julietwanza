import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import ProgressBar from '../components/ProgressBar';

export default function Course(){
  const { id } = useParams();
  const [course,setCourse]=useState(null);
  const [progress,setProgress]=useState({ completedLessonIds: [] });

  useEffect(()=>{ API.get(`/courses/${id}`).then(r=>setCourse(r.data)).catch(()=>{}); API.get(`/progress/${id}`).then(r=>setProgress(r.data || { completedLessonIds: [] })).catch(()=>{}); },[id]);

  function markDone(lessonId){
    API.post(`/progress/${id}/complete`,{ lessonId }).then(r=>setProgress(r.data)).catch(()=>{});
  }

  if(!course) return <div style={{padding:20}}>Loading...</div>;
  const completed = new Set((progress.completedLessonIds||[]).map(x=>x.toString()));
  return (<div style={{padding:20}}>
    <h1>{course.title}</h1>
    <p>{course.description}</p>
    <ProgressBar total={course.lessons.length} completed={completed.size} />
    <ol>{course.lessons.map(ls => (
      <li key={ls._id} style={{marginBottom:12}}>
        <h3>{ls.title} ({ls.durationMinutes}m)</h3>
        <p>{ls.content}</p>
        <button disabled={completed.has(ls._id)} onClick={()=>markDone(ls._id)}>{completed.has(ls._id) ? 'Completed' : 'Mark complete'}</button>
      </li>
    ))}</ol>
  </div>);
}
