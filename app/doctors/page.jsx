import {D} from '@/lib/data';import {DCard,Head} from '@/components/Ui';
export const metadata={title:'Our Doctors | Maison Derm Clinic (Demo)'};
export default function Doctors(){return <><Head e="Our Doctors" t="The People Behind Your Care" p="Demo profiles."/><section className="sec"><div className="w grid g3">{D.map(d=><DCard key={d.id} d={d}/>)}</div></section></>}
