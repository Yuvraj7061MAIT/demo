'use client';
import {useState,useEffect} from 'react';import {T,D,SLOTS} from '@/lib/data';import {Head} from '@/components/Ui';
const load=()=>{try{return JSON.parse(localStorage.getItem('md_appts'))||[]}catch{return[]}};
const sim=s=>[...s].reduce((x,c)=>x+c.charCodeAt(0),0)%4===0;
export default function Book(){const [v,sv]=useState({tr:'',dr:'',date:'',slot:'',name:'',ph:'',em:'',type:'New patient'});const [er,se]=useState({});const [ap,sa]=useState([]);const [done,sd]=useState(null);
useEffect(()=>{sa(load());const d=new URLSearchParams(location.search).get('doctor');if(d)sv(x=>({...x,dr:d}))},[]);
const set=k=>e=>sv({...v,[k]:e.target.value,...(k!=='slot'&&['dr','date'].includes(k)?{slot:''}:{})});
const doc=D.find(d=>d.id===v.dr);const okDay=doc&&v.date&&doc.days.includes(new Date(v.date+'T00:00').getDay());
const taken=s=>ap.some(a=>a.dr===v.dr&&a.date===v.date&&a.slot===s&&a.status!=='Cancelled');
const submit=e=>{e.preventDefault();const E={};if(!v.tr)E.tr='Select a treatment.';if(!v.dr)E.dr='Select a doctor.';if(!v.date)E.date='Select a date.';if(!v.slot)E.slot='Select a slot.';if(v.name.trim().length<2)E.name='Enter your full name.';if(!/^[6-9]\d{9}$/.test(v.ph))E.ph='Enter a valid 10-digit mobile number.';if(!/^\S+@\S+\.\S+$/.test(v.em))E.em='Enter a valid email.';se(E);if(Object.keys(E).length)return;
const cur=load();if(cur.some(a=>a.dr===v.dr&&a.date===v.date&&a.slot===v.slot&&a.status!=='Cancelled'))return se({slot:'That slot was just taken.'});
const ref='MD-'+Date.now().toString().slice(-6);const rec={...v,ref,status:'Pending'};try{localStorage.setItem('md_appts',JSON.stringify([...cur,rec]))}catch{}sa([...cur,rec]);sd(ref)};
if(done)return <><Head e="Appointments" t="Request received"/><section className="sec"><div className="w"><h2 style={{color:'var(--gold)'}}>{done}</h2><p>Status: <b>Pending</b>. This is not a confirmed appointment; the clinic will contact you to confirm. (Demo: no email or SMS is sent.)</p></div></section></>;
const F=({k,children})=><><div className="err">{er[k]}</div></>;
return <><Head e="Appointments" t="Book a Consultation" p="Availability is simulated for this demo."/><section className="sec"><form className="w" style={{maxWidth:560}} onSubmit={submit} noValidate>
<label htmlFor="tr">Treatment</label><select id="tr" value={v.tr} onChange={set('tr')}><option value="">Select…</option>{T.map(t=><option key={t.slug}>{t.name}</option>)}</select><F k="tr"/>
<label htmlFor="dr">Doctor</label><select id="dr" value={v.dr} onChange={set('dr')}><option value="">Select…</option>{D.map(d=><option key={d.id} value={d.id}>{d.name}</option>)}</select><F k="dr"/>
<label htmlFor="dt">Date</label><input id="dt" type="date" value={v.date} min={new Date(Date.now()+864e5).toISOString().slice(0,10)} onChange={set('date')}/><F k="date"/>
<label>Time slots</label><div>{v.dr&&v.date?(okDay?SLOTS.map(s=><button type="button" key={s} className={`slot ${v.slot===s?'on':''}`} disabled={taken(s)||sim(v.dr+v.date+s)} onClick={()=>sv({...v,slot:s})}>{s}</button>):<span className="mut">Doctor unavailable that day.</span>):<span className="mut">Choose doctor and date first.</span>}</div><F k="slot"/>
<label htmlFor="nm">Full name</label><input id="nm" value={v.name} onChange={set('name')}/><F k="name"/>
<label htmlFor="ph">Mobile</label><input id="ph" inputMode="numeric" value={v.ph} onChange={set('ph')}/><F k="ph"/>
<label htmlFor="em">Email</label><input id="em" type="email" value={v.em} onChange={set('em')}/><F k="em"/>
<label htmlFor="ty">Patient type</label><select id="ty" value={v.type} onChange={set('type')}><option>New patient</option><option>Returning patient</option></select>
<p><button className="btn">Submit Request</button></p></form></section></>}
