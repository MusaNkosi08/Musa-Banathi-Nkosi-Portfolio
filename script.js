const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,FINE=matchMedia('(hover:hover) and (pointer:fine)').matches,G='https://github.com/MusaNkosi08',PH=window.PHOTO,MOB=()=>innerWidth<=800;
const P=[
{id:'nexus',n:'NEXUS',r:'Full-stack, web and mobile',d:'Marketplace with an Angular web app, a React Native app and an Express API.',t:['Angular','React Native','Express','MySQL'],g:'linear-gradient(135deg,#111,#b4623f)',x:'A marketplace built with an Angular web app, a React Native mobile app, and an Express API on a MySQL database.'},
{id:'arcade',n:'Opportunity Arcade',r:'UI design and wireframes',d:'Verified youth opportunities portal for South Africa, with a retro arcade theme.',t:['UI design','Wireframes','User stories'],g:'linear-gradient(135deg,#6b1d2a,#e8a020)',x:'A portal for verified youth opportunities. I wrote the user stories and designed wireframes for five pages.'},
{id:'snuggle',n:'SnuggleReads',r:'Full-stack, built solo',d:'Online bookstore with inventory and order management.',t:['React','Spring Boot','MySQL','REST'],g:'linear-gradient(135deg,#6b1d2a,#b4623f)',x:'Built independently across the full SDLC. A React frontend talks to Spring Boot REST APIs, with MySQL holding books, stock and orders.'},
{id:'worldsnap',n:'WorldSnap',r:'Celo hackathon, top 30',d:'Social platform with location features and decentralised rewards.',t:['Celo','React','Solidity'],g:'linear-gradient(135deg,#e8a020,#111)',x:'Location-based social features with decentralised reward mechanics. The project earned a top-30 place at a Celo hackathon.'},
{id:'wordplay',n:'WordPlay',r:'Blockchain, web',d:'Decentralised word game with on-chain scoring.',t:['React','Solidity'],g:'linear-gradient(135deg,#222,#6b1d2a)',x:'A React frontend paired with Solidity smart contracts that run the scoring logic on-chain.'},
{id:'eventpay',n:'EventPay',r:'Blockchain, web',d:'Crypto event ticketing with wallets and peer-to-peer payments.',t:['React','Wallets'],g:'linear-gradient(135deg,#b4623f,#111)',x:'Ticket purchase and payment flows connected to user wallets.'},
{id:'aboutme',n:'About Me Book',r:'Frontend, designed in Figma',d:'Interactive portfolio with 3D animation and responsive layouts.',t:['React','TypeScript','Figma'],g:'linear-gradient(135deg,#b4623f,#e8a020)',x:'Designed in Figma first, then built in React and TypeScript. Live on GitHub.'}];
$('#cnt').textContent=P.length+' projects';
$('#gr').innerHTML=P.map((p,i)=>`<a class="row" href="#${p.id}" data-i="${i}"><small>0${i+1}</small><div><h3>${p.n}</h3><p>${p.d}</p></div><div class="rt"><div><b>${p.r}</b><small>${p.t.join(' · ')}</small></div><span aria-hidden="true">→</span></div></a>`).join('');
$('#cp').onclick=async()=>{try{await navigator.clipboard.writeText('bmnkosi08@gmail.com')}catch(e){}toast('Email copied')};
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2200)}
// Get a free access key at https://web3forms.com (it is sent to your email) and paste it here.
const FORM_KEY='';
$('#fm').onsubmit=async e=>{e.preventDefault();const n=$('#nm').value,em=$('#em').value,m=$('#ms').value,b=$('#fm button[type=submit]');b.disabled=true;let ok=false;
if(FORM_KEY){try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:FORM_KEY,name:n,email:em,message:m,subject:'Portfolio message from '+n})});ok=(await r.json()).success}catch(x){}}
if(ok){toast('Message sent. I’ll reply within an hour.');$('#fm').reset()}else location.href=`mailto:bmnkosi08@gmail.com?subject=${encodeURIComponent('Message from '+n)}&body=${encodeURIComponent(m+'\n\n'+em)}`;b.disabled=false};
// routing with strip reshuffle
const IDX={home:1,about:2,work:3,contact:4};let cur='',busy=false;
function layout(a,anim){const S=[1,2,3,4].map(n=>$('#s'+n)),b=S.map(s=>s.getBoundingClientRect().left);
S.forEach((s,i)=>{const n=i+1;s.style.order=n>a?-n:1+(a-n);s.classList.toggle('on',n==a)});if(MOB())S.forEach((s,i)=>{s.style.order=i;s.style.gridColumn=i+1});else S.forEach(s=>s.style.gridColumn='');
if(anim&&!RM&&!MOB())S.forEach((s,i)=>{const d=b[i]-s.getBoundingClientRect().left;if(d)gsap.fromTo(s,{x:d},{x:0,duration:.7,ease:'power3.inOut'})})}
function apply(){const h=location.hash.slice(1)||'home',p=P.find(x=>x.id==h),pg=p?'det':(IDX[h]?h:'home');
if(p)$('#dc').innerHTML=`<a href="#work" class="lk" style="margin:0">← Work</a><h2 style="margin-top:32px" id="dh">${p.n}</h2><p class="sb">${p.r}</p><div class="big" style="background:${p.g}" role="img" aria-label="${p.n} preview placeholder">${p.n[0]}</div><p style="max-width:560px">${p.d} ${p.x}</p><div class="tg">${p.t.map(x=>`<span>${x}</span>`).join('')}</div><p style="margin-top:20px"><a class="btn s" href="${G}" target="_blank" rel="noopener">GitHub profile</a></p><p style="color:var(--mut);font-size:.85rem;margin-top:20px">Screenshots and a live demo link will be added when this project is deployed.</p>`;
layout(p?3:IDX[pg],cur!=='');$$('.pg').forEach(s=>s.classList.toggle('on',s.id==pg));$('#main').scrollTop=0;
if(!RM)gsap.fromTo(`#${pg} .in > *,#home .art`,{opacity:0,y:20},{opacity:1,y:0,stagger:.07,duration:.6,delay:cur?.15:0,ease:'power3.out'});
if(pg=='home'&&window.parts)window.parts.replay();cur=pg}
addEventListener('hashchange',()=>{if(RM||!cur)return apply();gsap.to('.pg.on',{opacity:0,duration:.2,onComplete:()=>{gsap.set('.pg',{opacity:1});apply()}})});
// cursor + work preview
if(FINE&&!RM){document.body.classList.add('cu');const c=$('#cc'),d=$('#cd'),pv=$('#pv');let x=-50,y=-50,cx=-50,cy=-50;
addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;d.style.transform=`translate(${x}px,${y}px)`;const t=e.target.closest('a,button');c.classList.toggle('big',!!t);const r=e.target.closest('.row');if(r){const p=P[r.dataset.i];pv.style.background=p.g;pv.textContent=p.n;pv.classList.add('on')}else pv.classList.remove('on')});
(function f(){cx+=(x-cx)*.18;cy+=(y-cy)*.18;c.style.transform=`translate(${cx}px,${cy}px)`;pv.style.transform=`translate(${cx-115}px,${cy-60}px)`;requestAnimationFrame(f)})()}
// particle portrait
(function(){const cv=$('#cv'),g=cv.getContext('2d'),img=new Image();let ps=[],dust=[],W,H,mx=-999,my=-999,sc,dp=1,t0=0,run=false,ox=0;
img.onload=()=>{W=84;H=Math.round(W*img.height/img.width);const o=document.createElement('canvas');o.width=W;o.height=H;const q=o.getContext('2d');q.drawImage(img,0,0,W,H);const d=q.getImageData(0,0,W,H).data;
for(let j=0;j<H;j++)for(let i=0;i<W;i++){const u=i/W,v=j/H,hx=(u-.54)/.125,hy=(v-.225)/.12;let ok=hx*hx+hy*hy<1;
if(v>.3&&v<.9){const l=v<.37?.43-3*(v-.3):.22-.08*(v-.37),r=v<.37?.66+2.3*(v-.3):.82;if(u>l&&u<r)ok=true}
if(!ok)continue;const k=(j*W+i)*4,R=d[k],Gc=d[k+1],B=d[k+2];if(Gc>R+6&&Gc>B)continue;const lum=(.3*R+.59*Gc+.11*B)/255;
if(v>.66&&Math.random()<(v-.66)/.26)continue;if(Math.random()>.3+.7*(1-lum)**1.2)continue;
const gr=Math.min(7,(lum*8)|0),m=gr*26+20;ps.push({u,v,c:gr,col:`rgb(${m+8},${m+3},${m})`,x:0,y:0,vx:0,vy:0,d:Math.random()*1.4,s:.5+(1-lum)*.4})}
ps.sort((a,b)=>a.c-b.c);for(let i=0;i<260;i++)dust.push({});size();replay();if(!RM){run=true;loop()}else draw(true)};img.src=PH;
function size(){const r=cv.getBoundingClientRect();dp=Math.min(devicePixelRatio||1,2);cv.width=r.width*dp;cv.height=r.height*dp;sc=cv.height/H;ox=(cv.width-W*sc)/2;for(const p of ps){p.hx=ox+p.u*W*sc;p.hy=p.v*H*sc}}
function reborn(s,first){s.x=cv.width*(.45+Math.random()*.2);s.y=cv.height*(.16+Math.random()*.1);s.vy=-(.15+Math.random()*.5)*dp;s.vx=(Math.random()-.5)*.4*dp;s.l=first?Math.random():0;s.sz=(3+Math.random()*3)*dp}
function replay(){t0=performance.now();for(const p of ps){p.x=Math.random()*cv.width;p.y=Math.random()*cv.height*.7-cv.height*.3;p.vx=p.vy=0}dust.forEach(s=>reborn(s,true))}
function draw(st){g.clearRect(0,0,cv.width,cv.height);let lc=-1;const z=sc;for(const p of ps){if(p.c!==lc){g.fillStyle=p.col;lc=p.c}const x=st?p.hx:p.x,y=st?p.hy:p.y;g.fillRect(x,y,p.s*z,p.s*z)}
if(st)return;g.fillStyle='#8a4a3c';for(const p of ps){const e=Math.abs(p.x-p.hx)+Math.abs(p.y-p.hy);if(e>20*dp&&e<80*dp&&p.c>2)g.fillRect(p.x,p.y,p.s*z,p.s*z)}
g.fillStyle='#666';for(const s of dust){g.globalAlpha=Math.max(0,1-s.l)*.8;g.fillRect(s.x,s.y,s.sz,s.sz)}g.globalAlpha=1}
function loop(){requestAnimationFrame(loop);if(!$('#home').classList.contains('on'))return;const now=(performance.now()-t0)/1000,r=cv.getBoundingClientRect(),px=(mx-r.left)*dp,py=(my-r.top)*dp,R=62*dp;
for(const p of ps){if(now<p.d)continue;const fl=Math.sin(now*1.1+p.u*9+p.v*5)*sc*.1;let ax=(p.hx-p.x)*.045,ay=(p.hy+fl-p.y)*.045;const dx=p.x-px,dy=p.y-py,dd=dx*dx+dy*dy;if(dd<R*R){const s=Math.sqrt(dd)+1,f=(1-s/R)*7;ax+=dx/s*f;ay+=dy/s*f}p.vx=(p.vx+ax)*.84;p.vy=(p.vy+ay)*.84;p.x+=p.vx;p.y+=p.vy}
for(const s of dust){s.l+=.004;s.x+=s.vx+Math.sin(now*2+s.y*.02)*.2*dp;s.y+=s.vy;if(s.l>1)reborn(s)}draw()}
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});addEventListener('resize',()=>{if(ps.length){size();RM&&draw(true)}});window.parts={replay:()=>{if(ps.length){size();replay();RM&&draw(true)}}}})();
const ld=$('#ld');if(RM){ld.remove();apply()}else gsap.timeline({onComplete:()=>{ld.remove()}}).from('#ld b',{opacity:0,duration:.4}).add(()=>apply(),'+=.2').to(ld,{opacity:0,duration:.5},'+=.1');
