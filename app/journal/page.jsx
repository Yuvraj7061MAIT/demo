import {A} from '@/lib/data';import {ACard,Head} from '@/components/Ui';
export const metadata={title:'Journal | Maison Derm Clinic (Demo)'};
export default function J(){return <><Head e="Journal" t="Skin & Hair Education" p="Educational demo articles; real ones need medical review."/><section className="sec"><div className="w grid g3">{A.map((a,i)=><ACard key={a.slug} a={a} i={i}/>)}</div></section></>}
