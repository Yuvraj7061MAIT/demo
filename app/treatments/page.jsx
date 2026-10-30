'use client';
import {useState} from 'react';import {T,CATS} from '@/lib/data';import {TCard,Head,Notice} from '@/components/Ui';
export default function Treatments(){const [f,s]=useState('All');return <><Head e="Treatments" t="Care, Tailored to You" p="Filter by category."/><section className="sec"><div className="w">{['All',...CATS].map(c=><button key={c} className={`chip ${c===f?'on':''}`} onClick={()=>s(c)}>{c}</button>)}<div className="grid g3">{T.map((t,i)=>(f==='All'||t.cat===f)&&<TCard key={t.slug} t={t} i={i}/>)}</div><Notice/></div></section></>}
