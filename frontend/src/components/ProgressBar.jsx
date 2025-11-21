export default function ProgressBar({ total, completed }){
  const pct = total? Math.round((completed/total)*100) : 0;
  return (<div style={{maxWidth:400}}>
    <div style={{width:'100%',background:'#eee',height:12,borderRadius:6}}>
      <div style={{width:`${pct}%`,height:12,background:'#4caf50',borderRadius:6}} />
    </div>
    <p>{completed}/{total} ({pct}%)</p>
  </div>);
}
