import { useState } from "react";

const Building = ({ rooms=0, ext=0, dbl=0 }) => (
  <svg viewBox="0 0 280 195" width="260" height="180">
    <rect x="10" y="170" width="260" height="5" rx="2" fill="#1e3a5f" opacity="0.4"/>
    <rect x="40" y="58" width="200" height="114" rx="4" fill="#0b1e35" stroke="#1e5aaa" strokeWidth="1.5"/>
    <polygon points="28,58 140,16 252,58" fill="#07152a" stroke="#1e5aaa" strokeWidth="1.5"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <rect x={60+i*60} y="76" width="34" height="26" rx="2" fill={rooms>i?"#00ccff":"#071828"} stroke={rooms>i?"#00aaee":"#1e3050"} strokeWidth="1" opacity={rooms>i?0.85:0.35}/>
        <rect x={60+i*60} y="116" width="34" height="26" rx="2" fill={rooms>i+3?"#00ccff":"#071828"} stroke={rooms>i+3?"#00aaee":"#1e3050"} strokeWidth="1" opacity={rooms>i+3?0.85:0.35}/>
      </g>
    ))}
    {rooms>0&&[0,1,2].slice(0,Math.min(rooms,3)).map(i=>(
      <rect key={i} x={91+i*60} y="82" width="6" height="14" rx="1" fill="#00ff80" opacity="0.9"/>
    ))}
    <rect x="110" y="136" width={dbl>0?60:30} height="36" rx="2" fill={ext>0?"#ff5a20":"#071828"} stroke={ext>0?"#ff7a45":"#1e3050"} strokeWidth="1.5"/>
    {dbl>0&&<line x1="140" y1="136" x2="140" y2="172" stroke="#07152a" strokeWidth="2"/>}
    {ext>0&&<circle cx={dbl>0?162:128} cy="154" r="3" fill="#fff" opacity="0.7"/>}
    <circle cx="224" cy="32" r="3.5" fill="#00ccff" opacity="0.85"/>
    <path d="M224 28 Q235 21 246 28" stroke="#00ccff" strokeWidth="1.5" fill="none" opacity="0.55"/>
    <path d="M224 28 Q213 21 202 28" stroke="#00ccff" strokeWidth="1.5" fill="none" opacity="0.55"/>
  </svg>
);

const Person = ({ pulse }) => (
  <svg viewBox="0 0 80 118" width="76" height="112" style={{filter:"drop-shadow(0 4px 14px rgba(0,200,255,0.3))",transition:"transform 0.5s",transform:pulse?"translateY(-5px)":"translateY(0)"}}>
    <ellipse cx="40" cy="106" rx="21" ry="5.5" fill="#00ccff" opacity="0.12"/>
    <rect x="22" y="57" width="36" height="43" rx="8" fill="#0e4470" stroke="#00ccff" strokeWidth="1.5"/>
    <rect x="33" y="61" width="14" height="9" rx="2" fill="#00aadd" opacity="0.35"/>
    <circle cx="40" cy="40" r="17" fill="#0e4470" stroke="#00ccff" strokeWidth="1.5"/>
    <circle cx="34" cy="38" r="2.5" fill="#00ccff" opacity="0.85"/>
    <circle cx="46" cy="38" r="2.5" fill="#00ccff" opacity="0.85"/>
    <path d="M34 48 Q40 53 46 48" stroke="#00ccff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <rect x="8" y="60" width="14" height="8" rx="4" fill="#0e4470" stroke="#00ccff" strokeWidth="1"/>
    <rect x="58" y="60" width="14" height="8" rx="4" fill="#0e4470" stroke="#00ccff" strokeWidth="1"/>
    <rect x="24" y="97" width="11" height="15" rx="4" fill="#091f38" stroke="#1e4a80" strokeWidth="1"/>
    <rect x="45" y="97" width="11" height="15" rx="4" fill="#091f38" stroke="#1e4a80" strokeWidth="1"/>
  </svg>
);

const Row = ({icon,label,detail,hi}) => (
  <div style={{display:"flex",gap:"11px",alignItems:"flex-start",padding:"12px 14px",marginBottom:"8px",background:hi?"rgba(0,200,255,0.065)":"rgba(255,255,255,0.022)",border:`1px solid ${hi?"rgba(0,200,255,0.22)":"rgba(255,255,255,0.06)"}`,borderRadius:"9px"}}>
    <span style={{fontSize:"17px",marginTop:"1px",flexShrink:0}}>{icon}</span>
    <div>
      <div style={{color:hi?"#00ccff":"#c8e0f8",fontWeight:600,fontSize:"13px",marginBottom:"3px"}}>{label}</div>
      <div style={{color:"#4a6a88",fontSize:"11.5px",lineHeight:1.55}}>{detail}</div>
    </div>
  </div>
);

export default function App() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({rooms:0,ext:null,extN:1,dbl:null,dblN:1});
  const [pulse, setPulse] = useState(false);

  const go = (upd={}, skip=1) => {
    setA(p=>({...p,...upd}));
    setPulse(true); setTimeout(()=>setPulse(false),500);
    setStep(s=>s+skip);
  };

  const r=a.rooms, extN=a.ext?(a.extN||0):0, dblN=a.dbl?(a.dblN||0):0;
  const singles=Math.max(0,r-dblN);

  const btn = (extra={}) => ({background:"linear-gradient(135deg,#005db0,#0095e8)",color:"#fff",border:"none",borderRadius:"9px",padding:"11px 26px",fontSize:"14px",fontWeight:600,cursor:"pointer",boxShadow:"0 4px 16px rgba(0,140,255,0.25)",...extra});
  const yesno = {background:"rgba(0,200,255,0.06)",color:"#00ccff",border:"1px solid rgba(0,200,255,0.28)",borderRadius:"9px",padding:"11px 34px",fontSize:"14px",fontWeight:600,cursor:"pointer"};
  const circ = {width:"40px",height:"40px",borderRadius:"50%",background:"rgba(0,200,255,0.09)",border:"1px solid rgba(0,200,255,0.28)",color:"#00ccff",fontSize:"22px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"};
  const h2 = {color:"#d5ecff",fontSize:"17px",fontWeight:600,marginBottom:"7px"};
  const sub = {color:"#4a6a88",fontSize:"12px",marginBottom:"20px"};

  const Counter = ({val, color="#00ccff", field}) => (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",margin:"18px 0 22px"}}>
      <button onClick={()=>setA(p=>({...p,[field]:Math.max(1,p[field]-1)}))} style={circ}>−</button>
      <span style={{fontSize:"46px",fontWeight:700,color,fontFamily:"'Orbitron',monospace",minWidth:"64px",textAlign:"center"}}>{val}</span>
      <button onClick={()=>setA(p=>({...p,[field]:p[field]+1}))} style={circ}>+</button>
    </div>
  );

  const slides = [
    <div key="w" style={{textAlign:"center"}}>
      <div style={{marginBottom:"18px"}}><Person pulse={pulse}/></div>
      <h2 style={{color:"#00ccff",fontSize:"20px",marginBottom:"8px",fontFamily:"'Orbitron',monospace",letterSpacing:"0.05em"}}>Access Control Estimator</h2>
      <p style={{color:"#4a6a88",fontSize:"13px",maxWidth:"290px",margin:"0 auto 24px",lineHeight:1.65}}>Answer a few questions and we'll outline exactly what your facility needs.</p>
      <button onClick={()=>go()} style={btn()}>Get Started →</button>
    </div>,

    <div key="r" style={{textAlign:"center"}}>
      <div style={{marginBottom:"14px"}}><Building rooms={r}/></div>
      <h2 style={h2}>How many rooms need card readers?</h2>
      <p style={sub}>Include every door that needs controlled access.</p>
      <Counter val={r||0} field="rooms"/>
      <button onClick={()=>go()} disabled={r<1} style={btn({opacity:r<1?0.35:1})}>Next →</button>
    </div>,

    <div key="e" style={{textAlign:"center"}}>
      <div style={{marginBottom:"14px"}}><Building rooms={r} ext={0}/></div>
      <h2 style={h2}>Are any doors external?</h2>
      <p style={sub}>Doors that lead directly outside the building.</p>
      <div style={{display:"flex",gap:"14px",justifyContent:"center"}}>
        <button onClick={()=>go({ext:true})} style={yesno}>Yes</button>
        <button onClick={()=>go({ext:false,extN:0},2)} style={yesno}>No</button>
      </div>
    </div>,

    <div key="en" style={{textAlign:"center"}}>
      <div style={{marginBottom:"14px"}}><Building rooms={r} ext={a.extN}/></div>
      <h2 style={h2}>How many external doors?</h2>
      <p style={sub}>Enter the number that lead directly outside.</p>
      <Counter val={a.extN} color="#ff6030" field="extN"/>
      <button onClick={()=>go()} style={btn()}>Next →</button>
    </div>,

    <div key="d" style={{textAlign:"center"}}>
      <div style={{display:"flex",gap:"24px",justifyContent:"center",marginBottom:"14px"}}>
        <div style={{textAlign:"center"}}>
          <svg viewBox="0 0 100 155" width="88" height="138">
            <rect x="10" y="8" width="80" height="140" rx="3" fill="#0b1e35" stroke="#1e5aaa" strokeWidth="2"/>
            <rect x="14" y="12" width="72" height="132" rx="2" fill="#071222"/>
            <rect x="5" y="62" width="9" height="26" rx="2" fill="#ff5a20" stroke="#ff7a45" strokeWidth="1"/>
            <circle cx="84" cy="80" r="4" fill="#00ccff" opacity="0.9"/>
          </svg>
          <div style={{color:"#3a5870",fontSize:"10px",marginTop:"3px"}}>Single → Electric Strike</div>
        </div>
        <div style={{textAlign:"center"}}>
          <svg viewBox="0 0 140 155" width="124" height="138">
            <rect x="8" y="8" width="57" height="140" rx="3" fill="#0b1e35" stroke="#1e5aaa" strokeWidth="2"/>
            <rect x="75" y="8" width="57" height="140" rx="3" fill="#0b1e35" stroke="#1e5aaa" strokeWidth="2"/>
            <line x1="70" y1="8" x2="70" y2="148" stroke="#00ccff" strokeWidth="1" strokeDasharray="5,4" opacity="0.35"/>
            <rect x="3" y="58" width="8" height="18" rx="2" fill="#00ff80" opacity="0.85"/>
            <rect x="129" y="58" width="8" height="18" rx="2" fill="#00ff80" opacity="0.85"/>
            <text x="70" y="85" textAnchor="middle" fill="#00ccff" fontSize="9" fontFamily="monospace" opacity="0.6">MAG LOCK</text>
          </svg>
          <div style={{color:"#3a5870",fontSize:"10px",marginTop:"3px"}}>Double → Mag Lock + REX</div>
        </div>
      </div>
      <h2 style={h2}>Are any doors double doors?</h2>
      <p style={sub}>Double doors need mag locks, motion sensors & REX sensors.</p>
      <div style={{display:"flex",gap:"14px",justifyContent:"center"}}>
        <button onClick={()=>go({dbl:true})} style={yesno}>Yes</button>
        <button onClick={()=>go({dbl:false,dblN:0},2)} style={yesno}>No</button>
      </div>
    </div>,

    <div key="dn" style={{textAlign:"center"}}>
      <svg viewBox="0 0 140 155" width="124" height="138" style={{marginBottom:"14px"}}>
        <rect x="8" y="8" width="57" height="140" rx="3" fill="#0b1e35" stroke="#1e5aaa" strokeWidth="2"/>
        <rect x="75" y="8" width="57" height="140" rx="3" fill="#0b1e35" stroke="#1e5aaa" strokeWidth="2"/>
        <line x1="70" y1="8" x2="70" y2="148" stroke="#a78bfa" strokeWidth="1" strokeDasharray="5,4" opacity="0.5"/>
        <rect x="3" y="58" width="8" height="18" rx="2" fill="#00ff80" opacity="0.85"/>
        <rect x="129" y="58" width="8" height="18" rx="2" fill="#00ff80" opacity="0.85"/>
      </svg>
      <h2 style={h2}>How many double doors?</h2>
      <p style={sub}>Each set needs its own mag lock, motion sensor & REX.</p>
      <Counter val={a.dblN} color="#a78bfa" field="dblN"/>
      <button onClick={()=>go()} style={btn()}>See My Results →</button>
    </div>,

    <div key="s" style={{textAlign:"left"}}>
      <div style={{textAlign:"center",marginBottom:"18px"}}>
        <Building rooms={r} ext={extN} dbl={dblN}/>
        <h2 style={{...h2,textAlign:"center",marginTop:"12px"}}>Your Installation Needs</h2>
        <div style={{display:"flex",gap:"11px",justifyContent:"center",margin:"10px 0 16px",flexWrap:"wrap"}}>
          {[{l:"Card Readers",v:r,c:"#00ccff"},{l:"External Doors",v:extN,c:"#ff6030"},{l:"Double Doors",v:dblN,c:"#a78bfa"}].map(({l,v,c})=>(
            <div key={l} style={{background:"rgba(255,255,255,0.035)",border:`1px solid ${c}38`,borderRadius:"8px",padding:"8px 14px",textAlign:"center"}}>
              <div style={{color:c,fontSize:"22px",fontWeight:700,fontFamily:"'Orbitron',monospace"}}>{v}</div>
              <div style={{color:"#3a5870",fontSize:"10px"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <Row icon="🔌" hi={true} label={`Ethernet Wiring — ${r} run${r!==1?"s":""}`} detail="Cat6 ethernet from server room to each door location for IP-based card reader communication."/>
      <Row icon="🪪" hi={true} label={`Card Readers & Cables — ${r} unit${r!==1?"s":""}`} detail="ISONAS IP card readers with installation hardware and cables at each secured door."/>
      {singles>0&&<Row icon="⚡" hi={false} label={`Electric Strikes — ${singles} unit${singles!==1?"s":""}`} detail="Single doors require an electric strike for electronic locking and release."/>}
      {dblN>0&&<Row icon="🔒" hi={false} label={`Mag Locks + Motion + REX — ${dblN} set${dblN!==1?"s":""}`} detail="Double doors require magnetic locks, overhead motion sensors, and Request-to-Exit sensors on both sides."/>}
      <Row icon="☁️" hi={true} label={`ISONAS/Allegion Cloud License — ${r} reader${r!==1?"s":""}`} detail="Annual per-reader cloud license. Includes mobile credentials, remote management, and full audit logs."/>
      <Row icon="🛠️" hi={false} label="Annual Maintenance Agreement (Optional)" detail="Covers preventive maintenance, firmware updates, and priority support. Not required but recommended."/>
      <div style={{marginTop:"18px",padding:"14px",background:"rgba(0,200,255,0.045)",border:"1px solid rgba(0,200,255,0.16)",borderRadius:"10px",textAlign:"center"}}>
        <p style={{color:"#3a5870",fontSize:"11.5px",margin:"0 0 10px"}}>Ready for a formal quote based on your facility?</p>
        <button style={btn({width:"100%"})}>Request a Custom Quote</button>
      </div>
      <button onClick={()=>{setStep(0);setA({rooms:0,ext:null,extN:1,dbl:null,dblN:1});}} style={{width:"100%",marginTop:"8px",padding:"9px",background:"transparent",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"8px",color:"#3a5870",cursor:"pointer",fontSize:"12px"}}>
        ← Start Over
      </button>
    </div>
  ];

  const cur=Math.min(step,slides.length-1);
  const prog=Math.min((step/(slides.length-1))*100,100);

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(155deg,#020b18 0%,#051120 55%,#030d1a 100%)",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"36px 16px",fontFamily:"'Inter',-apple-system,sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
      <div style={{position:"fixed",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(0,170,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,170,255,0.022) 1px,transparent 1px)",backgroundSize:"44px 44px"}}/>
      <div style={{width:"100%",maxWidth:"452px",background:"rgba(7,18,36,0.92)",border:"1px solid rgba(0,180,255,0.16)",borderRadius:"18px",padding:"26px 22px",backdropFilter:"blur(22px)",boxShadow:"0 28px 80px rgba(0,0,0,0.55),inset 0 1px 0 rgba(0,190,255,0.07)",position:"relative",zIndex:1}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"18px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <div style={{width:"7px",height:"7px",borderRadius:"50%",background:"#00ff80",boxShadow:"0 0 8px #00ff80"}}/>
            <span style={{color:"#3a6080",fontSize:"11px",fontFamily:"'Orbitron',monospace",letterSpacing:"0.1em"}}>ACCESS CONTROL</span>
          </div>
          <span style={{color:"#1e3850",fontSize:"11px"}}>{step<slides.length-1?`Step ${step+1} of ${slides.length-1}`:"Complete ✓"}</span>
        </div>
        <div style={{height:"2px",background:"rgba(255,255,255,0.045)",borderRadius:"1px",marginBottom:"22px"}}>
          <div style={{height:"100%",width:`${prog}%`,background:"linear-gradient(90deg,#0080cc,#00ff80)",borderRadius:"1px",transition:"width 0.4s ease"}}/>
        </div>
        <div key={step} style={{animation:"fi 0.32s ease",minHeight:"295px"}}>
          {slides[cur]}
        </div>
        <style>{`@keyframes fi{from{opacity:0;transform:translateY(13px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </div>
    </div>
  );
}



This is what you wrote

✅ Refined Lovable Prompt
Here's a clean, detailed prompt you can paste directly into Lovable:

Build an interactive Access Control Estimator wizard page.
Design aesthetic: Dark tech/industrial — deep navy background (#030d1a), cyan accents (#00ccff), orange highlights (#ff6030) for external doors. Grid overlay texture. Orbitron font for numbers and headings. Single card layout, max 460px wide, centered on screen.
Page structure: A single animated card that steps the user through questions one at a time with a progress bar at the top.
Step flow:

Welcome screen — Animated SVG character (tech-style person graphic with glowing cyan accents). Title: "Access Control Estimator". Subtext: "Answer a few questions and we'll outline exactly what your facility needs." CTA button: "Get Started →"
Question 1 — Card Readers: Show an SVG building graphic. Ask: "How many rooms need card readers?" Use a +/− counter (large number display in Orbitron font). Building windows should light up cyan as the count increases. Next button disabled until count ≥ 1.
Question 2 — External Doors: Show the same building. Ask: "Are any doors external (leading outside the building)?" Yes / No buttons. If No, skip to Question 4.
Question 3 — External Door Count: Building graphic with orange-highlighted main door. Ask: "How many external doors?" +/− counter in orange.
Question 4 — Double Doors: Show side-by-side SVG comparison of a single door (with electric strike indicator) and a double door (with mag lock label). Ask: "Are any doors double doors?" Yes / No buttons. If No, go directly to Summary.
Question 5 — Double Door Count: Double door SVG. Ask: "How many double doors?" +/− counter in purple.
Summary screen: Show the building graphic with all data reflected (lit windows, orange external door, double-door outline). Display stat chips for total readers, external doors, and double doors. Then list the installation requirements as styled rows with icons:

🔌 Ethernet Wiring — [N] runs — Cat6 ethernet from server room to each door
🪪 Card Readers & Cables — [N] units — ISONAS IP readers with installation hardware
⚡ Electric Strikes — [N] units (only if single doors > 0) — For standard single doors
🔒 Mag Locks + Motion Sensors + REX Sensors — [N] sets (only if double doors > 0) — For double doors
☁️ ISONAS/Allegion Cloud License — [N] readers — Annual per-reader cloud license required
🛠️ Annual Maintenance Agreement (Optional) — Not required but available

End with a "Request a Custom Quote" CTA button and a "← Start Over" link.

Animations: Each step fades in with a slight upward slide (translateY + opacity). Progress bar fills smoothly. The person graphic bobs slightly on step transitions. Counter numbers animate on change.
State logic:

Track: rooms (int), hasExternal (bool), externalCount (int), hasDouble (bool), doubleCount (int)
Single doors = rooms − doubleCount
Conditional steps: skip externalCount if hasExternal=false; skip doubleCount if hasDouble=false
Summary rows are conditionally rendered based on values


That prompt has everything Lovable needs — the aesthetic, the logic, the conditional flow, and every screen described. The prototype above is a faithful preview of what it should look like.