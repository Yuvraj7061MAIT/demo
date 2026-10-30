import './globals.css';import {Header,Footer} from '@/components/Shell';
export const metadata={title:'Maison Derm Clinic – Dermatologist in South Delhi & Gurugram (Demo)',description:'Fictional demo of a premium dermatology and aesthetic clinic website.',openGraph:{title:'Maison Derm Clinic (Demo)'}};
export default function Root({children}){return <html lang="en"><body><div className="demo">DEMO MODE · Fictional clinic, placeholder content, simulated availability.</div><Header/><main>{children}</main><Footer/></body></html>}
