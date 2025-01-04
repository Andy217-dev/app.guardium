import{j as e,r as I,Q as L,c as k,B as w,e as g,a as V,F as b,I as P,h as M}from"./index-NBfXeSsy.js";import{V as E}from"./vpnService.http-e0Cr0eu7.js";const H=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",style:{cursor:"pointer"},children:[e.jsx("g",{clipPath:"url(#clip0_2867_1038)",children:e.jsx("path",{d:"M16 8.5H1.95312L8.10156 14.6484L7.39844 15.3516L0.046875 8L7.39844 0.648438L8.10156 1.35156L1.95312 7.5H16V8.5Z",fill:"white",fillOpacity:"0.55"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_2867_1038",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]}),B={cpuOptions:[{cpuName:"2x Intel Xeon E5-2620v4",cpuDetails:"16 cores, 32 threads 2.10Ghz",rumOptions:[{rumSize:32,memorySSDOptions:[{rumName:"1x 1 TB HDD SATA III 7200rpm",price:85}]},{rumSize:64,memorySSDOptions:[{rumName:"1x 1 TB HDD SATA III 7200rpm",price:115}]},{rumSize:96,memorySSDOptions:[{rumName:"1x 500GB SSD",price:130}]}]},{cpuName:"Intel Xeon E3-1230v6",cpuDetails:"4 cores, 8 threads 3.50Ghz",rumOptions:[{rumSize:32,memorySSDOptions:[{rumName:"2x 500GB NVMe SSD",price:75}]}]},{cpuName:"AMD EPYC 7402P",cpuDetails:"24 cores, 48 threads 2.80Ghz",rumOptions:[{rumSize:64,memorySSDOptions:[{rumName:"2x 480GB SSD (HW RAID-1)",price:145},{rumName:"2x 960GB SSD (HW RAID-1)",price:165}]},{rumSize:128,memorySSDOptions:[{rumName:"2x 960GB SSD (HW RAID-1)",price:210},{rumName:"2x 480 SSD + 10x 14TB HDD SATAIII 7200rpm (HW RAID-1)",price:540}]},{rumSize:256,memorySSDOptions:[{rumName:"2x 1.92TB SSD (HW RAID-1)",price:290}]}]},{cpuName:"Intel Xeon E-2336",cpuDetails:"6 cores, 12 threads 2.90Ghz",rumOptions:[{rumSize:32,memorySSDOptions:[{rumName:"2x 1TB HDD SATA III 7200rpm",price:70},{rumName:"2x 480GB SSD (SW RAID-1)",price:100}]}]},{cpuName:"2x Intel Xeon Silver 4310",cpuDetails:"24 cores, 48 threads 2.10Ghz",rumOptions:[{rumSize:128,memorySSDOptions:[{rumName:"2x 1.92TB SSD",price:240}]}]}],steps:[{step:"Choose_CPU",price:0,stepTitle:"Choose CPU type"},{step:"Choose_Memory",stepTitle:"Choose Memory",price:0},{step:"Choose_Storage",stepTitle:"Choose Storage",price:0},{step:"Data_Center",price:0,stepTitle:"Data Center"},{step:"Bandwidth",price:0,stepTitle:"Bandwidth"},{step:"Operating_system",price:0,stepTitle:"Operating system",text:"Choose your operating system"},{step:"IPv4_addresses",price:0,stepTitle:"IPv4 addresses",text:"These IP addresses can be used in combination with your server"},{step:"duration",price:0,stepTitle:"Subscription Period",text:"Select period you wish to activate your bare metal for."}],dataCenter:[{name:"Amsterdam",description:"4h Delivery"}],Bandwidth:[{name:"1Gbit/s - 50TB",price:0},{name:"1 Gbit/s - 100TB",price:70},{name:"1 Gbit/s - Unmetered",price:140}],OS:[{name:"Ubuntu 20.04",price:0},{name:"Ubuntu 22.04",price:0},{name:"Debian 11.x (bullseye)",price:0},{name:"Debian 12.x (bookworm)",price:0},{name:"AlmaLinux 8.x",price:0},{name:"AlmaLinux 9.x",price:0},{name:"CentOS Stream 9",price:0},{name:"Windows 2019 Standard (trial-key)",price:0},{name:"Windows 2019 Standard",price:70},{name:"Windows 2022 Standard (trial key)",price:0},{name:"Windows 2022 Standard",price:70}],duration:[{name:"1 month",number:1},{name:"3 months",number:3},{name:"6 months",number:6},{name:"9 months",number:9},{name:"12 months",number:12}],IPAddresses:{max:5,price:5,free:1},selectedIPAddresses:1,selectedDuration:1,selectedOS:"",selectedDataCenter:"",selectedBandwidth:"",selectedStep:0,selectedCpu:"",selectedGpu:0,selectedMemory:"",selectedEmail:"",selectedTelegram:"",price:[0],showForm:!1},_=I.createContext({...B,setSelectedStep:()=>{},setCpu:()=>{},setGpu:()=>{},setMemory:()=>{},setPrice:()=>{},setDataCenter:()=>{},setBandwidth:()=>{},setOS:()=>{},setIPAddresses:()=>{},setShowForm:()=>{},setDuration:()=>{},setUser:()=>{}});function W(s,r){switch(r.type){case"changeStep":return{...s,selectedStep:r.payload};case"selectCpu":return{...s,selectedCpu:r.payload};case"selectGpu":return{...s,selectedGpu:r.payload};case"selectMemory":return{...s,selectedMemory:r.payload};case"setDataCenter":return{...s,selectedDataCenter:r.payload};case"bandwidth":return{...s,selectedBandwidth:r.payload};case"setPrice":return{...s,steps:s.steps.map(t=>t.step===r.payload.step?{...t,price:r.payload.price}:t)};case"setOS":return{...s,selectedOS:r.payload};case"IPAddresses":return console.log(r.payload,"action.payload "),{...s,selectedIPAddresses:r.payload};case"duration":return console.log(r.payload,"action.payload "),{...s,selectedDuration:r.payload};case"setShowForm":return{...s,showForm:r.payload};case"setUser":return{...s,selectedEmail:r.payload.email,selectedTelegram:r.payload.telegram};default:return s}}console.log(B);const T=({children:s})=>{const[r,t]=I.useReducer(W,B);console.log(t,"dispatch");const o=l=>{t({type:"changeStep",payload:l})},n=l=>{t({type:"selectCpu",payload:l})},c=l=>{t({type:"selectGpu",payload:l})},a=l=>{t({type:"selectMemory",payload:l})},i=l=>{t({type:"setPrice",payload:l})},p=l=>{t({type:"setDataCenter",payload:l})},m=l=>{t({type:"bandwidth",payload:l})},u=l=>{t({type:"setOS",payload:l})},h=l=>{t({type:"IPAddresses",payload:l})},x=(l=!0)=>{t({type:"setShowForm",payload:l})},d=l=>{t({type:"duration",payload:l})},v=(l,y)=>{t({type:"setUser",payload:{email:l,telegram:y}})};return e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx(_.Provider,{value:{...r,setSelectedStep:o,setCpu:n,setGpu:c,setMemory:a,setPrice:i,setDataCenter:p,setBandwidth:m,setOS:u,setIPAddresses:h,setShowForm:x,setDuration:d,setUser:v},children:s})]})},S=()=>{const s=I.useContext(_);if(s===void 0)throw Error("ServerSetupContext was used outside of the ServerSetupProvider");return s},G=()=>{const{selectedCpu:s,selectedDuration:r,selectedMemory:t,selectedGpu:o,selectedBandwidth:n,selectedStep:c}=S();return e.jsxs("div",{className:"PriceBox ",children:[e.jsx("h4",{className:" text-center SERVER_DETAILS ",children:"SERVER DETAILS"}),e.jsxs("div",{className:"SelectionList",children:[e.jsx("div",{children:"CPU type"}),e.jsx("div",{children:e.jsx("svg",{width:"40",height:"2",viewBox:"0 0 40 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("line",{y1:"1",x2:"40",y2:"1",stroke:"white","stroke-opacity":"0.55","stroke-dasharray":"2 2"})})}),e.jsx("div",{className:"text-right",children:s}),e.jsx("div",{children:o?"Memory":e.jsx("svg",{width:"50",height:"16",viewBox:"0 0 50 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"50",height:"16",rx:"8",fill:"#3D3D3D"})})}),e.jsx("div",{children:e.jsx("svg",{width:"40",height:"2",viewBox:"0 0 40 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("line",{y1:"1",x2:"40",y2:"1",stroke:"white","stroke-opacity":"0.55","stroke-dasharray":"2 2"})})}),e.jsx("div",{className:"text-right",children:o?o+"GB":e.jsx("svg",{width:"89",height:"16",viewBox:"0 0 89 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"89",height:"16",rx:"8",fill:"#3D3D3D"})})}),e.jsx("div",{children:t?"Storage":e.jsx("svg",{width:"50",height:"16",viewBox:"0 0 50 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"50",height:"16",rx:"8",fill:"#3D3D3D"})})}),e.jsx("div",{children:e.jsx("svg",{width:"40",height:"2",viewBox:"0 0 40 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("line",{y1:"1",x2:"40",y2:"1",stroke:"white","stroke-opacity":"0.55","stroke-dasharray":"2 2"})})}),e.jsx("div",{className:"text-right",children:t||e.jsx("svg",{width:"89",height:"16",viewBox:"0 0 89 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"89",height:"16",rx:"8",fill:"#3D3D3D"})})}),e.jsx("div",{children:n?"Bandwidth":e.jsx("svg",{width:"50",height:"16",viewBox:"0 0 50 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"50",height:"16",rx:"8",fill:"#3D3D3D"})})}),e.jsx("div",{children:e.jsx("svg",{width:"40",height:"2",viewBox:"0 0 40 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("line",{y1:"1",x2:"40",y2:"1",stroke:"white","stroke-opacity":"0.55","stroke-dasharray":"2 2"})})}),e.jsx("div",{className:"text-right",children:n||e.jsx("svg",{width:"89",height:"16",viewBox:"0 0 89 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"89",height:"16",rx:"8",fill:"#3D3D3D"})})}),e.jsx("div",{children:c>6?"Subscription Period":e.jsx("svg",{width:"50",height:"16",viewBox:"0 0 50 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"50",height:"16",rx:"8",fill:"#3D3D3D"})})}),e.jsx("div",{children:e.jsx("svg",{width:"40",height:"2",viewBox:"0 0 40 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("line",{y1:"1",x2:"40",y2:"1",stroke:"white","stroke-opacity":"0.55","stroke-dasharray":"2 2"})})}),e.jsx("div",{className:"text-right",children:c>6?e.jsxs(e.Fragment,{children:[" ",r," month"]}):e.jsx("svg",{width:"89",height:"16",viewBox:"0 0 89 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{width:"89",height:"16",rx:"8",fill:"#3D3D3D"})})})]})]})},R=()=>{const[s,r]=I.useState(!1),{steps:t,selectedCpu:o,selectedGpu:n,selectedMemory:c,selectedDataCenter:a,selectedStep:i,selectedBandwidth:p,setSelectedStep:m,selectedOS:u,setShowForm:h,selectedIPAddresses:x}=S(),d=t==null?void 0:t.reduce((l,y)=>l+y.price,0),v=()=>{console.log(i,o),i===0&&(o?m(1):w.warn("select CPU")),i===1&&(n?m(2):w.warn("Select Memory")),i===2&&(c?m(3):w.warn("Select Storage")),i===3&&(a?m(4):w.warn("Select Data Center")),i===4&&(p?m(5):w.warn("Select Bandwidth")),i===5&&(u?m(6):w.warn("Select Operating system")),i===6&&(x?m(7):w.warn("Select selected IP Addresses system")),i===7&&h()};return e.jsxs("div",{className:"PriceBox text-center",children:[e.jsx("h4",{className:" text-center SERVER_PRICE ",children:"SERVER PRICE"}),e.jsxs("div",{className:" selectedListMobile d-block d-md-none w-100",children:[e.jsxs("div",{onClick:()=>{r(l=>!l)},className:" d-flex justify-content-between align-items-center w-100",children:[e.jsx("span",{children:"SERVER DETAILS"}),e.jsx("svg",{style:{transform:`rotate(${s?180:0}deg)`},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 9L12 15L18 9",stroke:"#8B8B8C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]}),s&&e.jsx(G,{})]}),e.jsxs("div",{className:" d-flex flex-row justify-content-md-center justify-content-between align-items-center  flex-md-column ",children:[e.jsx("div",{className:"customSwitch",children:"$"}),e.jsxs("div",{className:"  d-flex align-items-center justify-content-center ",children:[e.jsxs("span",{className:"PriceBox_price",children:["$ ",d||0," "]}),e.jsx("span",{className:"PriceBox_priceDuration",children:"/per month"})]})]}),e.jsx(k,{onClick:v,className:"btn priceBtn mb-3 w-100 text-center justify-content-center btn-green",children:"CONTINUE"}),e.jsx("div",{className:" textGrey textGrey-xs",children:"(Choose OS & RAID & IPs)"})]})},F=()=>{const{selectedStep:s,steps:r}=S();return e.jsx("div",{style:{width:100/(r.length+1)*(s+1)+"%"},className:"ProgressLine"})},$=()=>{const{Bandwidth:s,setBandwidth:r,setPrice:t,selectedBandwidth:o,selectedStep:n,steps:c}=S(),a=i=>{r(i.name),t({step:c[n].step,price:i.price})};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:s.length?s.map(i=>e.jsxs("div",{onClick:()=>a(i),className:g("boxItem",{active:i.name===o}),children:[e.jsx("div",{className:"textWight textWight-sm mb-2",children:i.name}),i.name.includes("1Gbit/s - 50T")?e.jsx("div",{className:"textGrey textGrey-xs",style:{color:"#00A3EE"},children:"Included"}):e.jsxs("div",{className:"textGrey textGrey-xs",children:["+ $",i.price]})]},`${i.name}${i.price}`)):null})},z=()=>{const{IPAddresses:s,setIPAddresses:r,selectedIPAddresses:t,setPrice:o,selectedStep:n,steps:c}=S(),a=i=>{i==="increase"&&t<s.max?(r(t+1),o({step:c[n].step,price:(t+1)*s.price-s.price})):i==="decrease"&&t>1&&(o({step:c[n].step,price:(t-1)*s.price-s.price}),r(t-1))};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:e.jsxs("div",{className:" d-flex flex-column flex-md-row align-items-start align-items-md-center",children:[e.jsxs("div",{className:"incrementInput",children:[e.jsx("div",{className:"incrementInput_valueField",children:t}),e.jsx("div",{onClick:()=>a("decrease"),className:g("incrementInput_button incrementInput_button-decrement",{"incrementInput_button-disabled":t<=1}),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("g",{children:e.jsx("path",{d:"M6 12H18",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})}),e.jsx("div",{onClick:()=>a("increase"),className:g("incrementInput_button incrementInput_button-increment",{"incrementInput_button-disabled":t>=s.max}),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M12 6V18M6 12H18",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),t===1?e.jsx("div",{className:" textGrey textGrey-xs pl-3 ipPrice",children:"(1 included)"}):e.jsx("div",{className:" textGrey textGrey-xs pl-3 ipPrice",children:`(+$${(Number(t)-1)*s.price}.00)`})]})})},U=()=>{const{cpuOptions:s,selectedCpu:r,setCpu:t,setPrice:o}=S(),n=s.map(a=>({cpuDetails:a.cpuDetails,cpuName:a.cpuName})),c=a=>{var p;console.log(a,"cpuName");const i=(p=s==null?void 0:s.find(m=>m.cpuName===a))==null?void 0:p.rumOptions[0].memorySSDOptions[0].price;i&&o({step:"Choose_Storage",price:i}),t(a)};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:n.length?n.map(a=>e.jsxs("div",{onClick:()=>c(a.cpuName),className:g("boxItem",{active:a.cpuName===r}),children:[e.jsx("div",{className:"textWight textWight-sm mb-2",children:a.cpuName}),e.jsx("div",{className:"textGrey textGrey-xs",children:a.cpuDetails})]},`${a.cpuName}${a.cpuDetails}`)):null})},Z=()=>{const{dataCenter:s,selectedDataCenter:r,setDataCenter:t}=S(),o=({name:n})=>{t(n)};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:s.length?s.map(n=>e.jsxs("div",{onClick:()=>o(n),className:g("boxItem",{active:r===n.name}),children:[e.jsx("div",{className:"textWight textWight-sm mb-2",children:n.name}),e.jsx("div",{className:"textGrey textGrey-xs",children:n.description})]},`${n.name}${n.description}`)):null})},q=()=>{const{selectedDuration:s,duration:r,setDuration:t}=S(),o=r,n=c=>{t(c)};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:o.length?o.map(c=>e.jsx("div",{onClick:()=>n(c.number),className:g("boxItem",{active:c.number===s}),children:e.jsx("div",{className:"textWight textWight-sm mb-2",children:c.name})},`${c.name}`)):null})},X=()=>{var i;const{cpuOptions:s,selectedGpu:r,selectedCpu:t,setGpu:o,setPrice:n}=S(),c=(i=s.find(p=>p.cpuName===t))==null?void 0:i.rumOptions,a=p=>{var u,h;console.log(p,"cpuName");const m=(h=(u=s==null?void 0:s.find(x=>x.cpuName===t))==null?void 0:u.rumOptions.find(x=>x.rumSize===p))==null?void 0:h.memorySSDOptions[0].price;m&&n({step:"Choose_Storage",price:m}),o(p)};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:c!=null&&c.length?c.map(p=>e.jsx("div",{onClick:()=>a(p.rumSize),className:g("boxItem boxItem-cpu",{active:p.rumSize===r}),children:e.jsxs("div",{className:"textWight textWight-sm mb-2",children:[p.rumSize,"GB"]})},`${p.rumSize}`)):null})},Q=()=>{var u,h,x;const{cpuOptions:s,setPrice:r,selectedCpu:t,selectedGpu:o,selectedMemory:n,setMemory:c,selectedStep:a,steps:i}=S(),p=(x=(h=(u=s.find(d=>d.cpuName===t))==null?void 0:u.rumOptions)==null?void 0:h.find(d=>d.rumSize===o))==null?void 0:x.memorySSDOptions,m=d=>{console.log(d,"storageData"),c(d.rumName),r({step:i[a].step,price:d.price})};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:p!=null&&p.length?p.map(d=>e.jsx("div",{onClick:()=>m(d),className:g("boxItem",{active:n===d.rumName}),children:e.jsx("div",{className:"textWight textWight-sm mb-2",children:d.rumName})},`${d.rumName}`)):null})},Y=()=>{const{OS:s,setOS:r,selectedOS:t,setPrice:o,selectedStep:n,steps:c}=S(),a=i=>{r(i.name),o({step:c[n].step,price:i.price})};return e.jsx("div",{className:"ourServer_cpuStepWrapper",children:s!=null&&s.length?s.map(i=>e.jsxs("div",{onClick:()=>a(i),className:g("boxItem",{active:t===i.name}),children:[e.jsx("div",{className:"textWight textWight-sm mb-2",children:i.name}),i.price?e.jsxs("div",{className:"textGrey textGrey-xs",children:["+ $",i.price]}):e.jsx("div",{className:"textGrey textGrey-xs",style:{color:"#00A3EE"},children:"Included"})]},`${i.name}${i.price}`)):null})};function J(){return e.jsxs("svg",{width:"84",height:"83",viewBox:"0 0 84 83",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0.637931",y:"9.63793",width:"72.7241",height:"72.7241",rx:"14.6724",stroke:"url(#paint0_linear_2806_13708)",strokeWidth:"1.27586"}),e.jsx("path",{d:"M52.7477 31.1597L37 40.4663V24L52.7477 31.1597Z",fill:"#009B95"}),e.jsx("path",{d:"M36.996 24V40.4663L21.2461 31.1597L36.996 24Z",fill:"#00FF97"}),e.jsx("path",{d:"M52.7522 34.1443L36.9933 43.4488L36.8008 43.6861V51.1659L36.9933 51.7323H36.9956V57.2845V68.1002L52.7388 53.7271L52.7522 53.7249V34.1443Z",fill:"#006C68"}),e.jsx("path",{d:"M36.996 51.6316H36.9938V43.4488L21.2461 34.1443V34.1466V34.1443V53.7249L27.3423 59.2883L36.9938 68.1002H36.996V51.6316Z",fill:"#00D67F"}),e.jsx("path",{d:"M36.9938 51.7323V43.4488L21.2461 34.1443L36.9938 51.7323Z",fill:"#38FFAE"}),e.jsx("path",{d:"M36.9922 43.4488V51.7323L52.7511 34.1443L36.9922 43.4488Z",fill:"#00A59F"}),e.jsx("rect",{x:"48",width:"36",height:"19",rx:"9.5",fill:"url(#paint1_linear_2806_13708)"}),e.jsx("path",{d:"M54.7191 13V6.45455H57.1161C57.5806 6.45455 57.9652 6.53125 58.2699 6.68466C58.5746 6.83594 58.8026 7.04155 58.9538 7.30149C59.1051 7.5593 59.1808 7.85014 59.1808 8.17401C59.1808 8.44673 59.1307 8.67685 59.0305 8.86435C58.9304 9.04972 58.7962 9.19886 58.6278 9.31179C58.4616 9.42259 58.2784 9.50355 58.0781 9.55469V9.61861C58.2955 9.62926 58.5075 9.69957 58.7141 9.82955C58.9229 9.95739 59.0955 10.1396 59.2319 10.3761C59.3683 10.6126 59.4364 10.9002 59.4364 11.239C59.4364 11.5735 59.3576 11.8739 59.1999 12.1403C59.0444 12.4045 58.8036 12.6143 58.4776 12.7699C58.1516 12.9233 57.7351 13 57.228 13H54.7191ZM55.7067 12.1531H57.1321C57.6051 12.1531 57.9439 12.0614 58.1484 11.8782C58.353 11.695 58.4553 11.4659 58.4553 11.1911C58.4553 10.9844 58.4031 10.7947 58.2987 10.6222C58.1942 10.4496 58.0451 10.3121 57.8512 10.2099C57.6594 10.1076 57.4315 10.0565 57.1673 10.0565H55.7067V12.1531ZM55.7067 9.28622H57.0298C57.2514 9.28622 57.4506 9.24361 57.6275 9.15838C57.8065 9.07315 57.9482 8.95384 58.0526 8.80043C58.1591 8.64489 58.2124 8.46165 58.2124 8.25071C58.2124 7.98011 58.1175 7.7532 57.9279 7.56996C57.7383 7.38672 57.4474 7.2951 57.0554 7.2951H55.7067V9.28622ZM60.9678 13V6.45455H65.0715V7.30469H61.9553V9.29901L64.8573 9.29901V10.146L61.9553 10.146V12.1499H65.1098V13H60.9678ZM66.4278 7.30469V6.45455L71.4935 6.45455V7.30469H69.4513V13H68.4669V7.30469H66.4278ZM72.7524 13H71.7041L74.0596 6.45455H75.2006L77.556 13H76.5077L74.6572 7.64347H74.6061L72.7524 13ZM72.9282 10.4368H76.3288V11.2678H72.9282V10.4368Z",fill:"white"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"paint0_linear_2806_13708",x1:"-7.65517",y1:"-5.57227",x2:"79.1035",y2:"92.0312",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#00D67F"}),e.jsx("stop",{offset:"0.232283",stopColor:"#00BB6F",stopOpacity:"0.33"}),e.jsx("stop",{offset:"0.557404",stopColor:"#393939",stopOpacity:"0"}),e.jsx("stop",{offset:"0.795278",stopColor:"#1A749A",stopOpacity:"0.33"}),e.jsx("stop",{offset:"1",stopColor:"#00A6ED"})]}),e.jsxs("linearGradient",{id:"paint1_linear_2806_13708",x1:"66",y1:"0",x2:"66",y2:"25.5",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#00A6ED"}),e.jsx("stop",{offset:"1",stopColor:"#53A47D"})]})]})]})}const K=()=>{const{selectedBandwidth:s,selectedCpu:r,selectedGpu:t,selectedIPAddresses:o,selectedMemory:n,selectedOS:c,selectedDataCenter:a,steps:i}=S(),[p,m]=I.useState(!1),[u,h]=I.useState(!1),{register:x,handleSubmit:d,clearErrors:v,formState:{errors:l}}=V(),y=d(async j=>{var f,C;if(!j.username&&!j.email){w.error("please enter telegram useName or Email");return}if(((f=j==null?void 0:j.username)==null?void 0:f.length)<3){w.error("Telegram userName mast be minimum 3 character");return}if(j.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j.email)){w.error("Please enter a valid email address.");return}console.log({...j,bandwidth:s,cpu:r,gpu:t,iPAddresses:o,memory:n,os:c,dataCenter:a,price:i.reduce((N,D)=>N+D.price,0)},"data"),m(!0);try{const N={...j,bandwidth:s,cpu:r,gpu:t,iPAddresses:o,memory:n,os:c,dataCenter:a,price:i.reduce((A,O)=>A+O.price,0)},D=await E.requestVPN(N);D.data.status&&(w.success("request sent successfully "),h(!0)),(C=D==null?void 0:D.data)!=null&&C.status||w.error("something went wrong")}catch(N){console.log(N,"333333333333"),w.error("something went wrong")}finally{m(!1)}});return e.jsx("div",{className:"sendServerInfoForm",children:e.jsxs("div",{className:"sendServerInfoForm_formContainer",children:[e.jsx("div",{className:" text-center",children:e.jsx(J,{})}),e.jsx("h2",{children:"Thank you for joining our Beta Program!"}),u?e.jsx("p",{children:"Request sent successfully we will contact you."}):e.jsx("p",{children:"Please provide your telegram username and/or email and we will contact you."}),!u&&e.jsxs("form",{autoComplete:"off",className:"",onSubmit:y,children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{children:"Telegram Username"}),e.jsx(b,{children:e.jsx(P,{onChange:()=>{v("username")},useRef:x("username"),hasError:!!l.username,name:"username",placeholder:"Telegram Username"})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{children:"Email"}),e.jsx(b,{children:e.jsx(P,{onChange:()=>{v("email")},useRef:x("email"),hasError:!!l.email,name:"email",placeholder:"Email "})})]}),e.jsx(k,{loading:p,className:" btn btn-green mt-4 w-100 text-center d-flex justify-content-center",children:"Continue"})]})]})})},ee=()=>{const{steps:s,selectedStep:r,setIPAddresses:t,setOS:o,setSelectedStep:n,setBandwidth:c,setDataCenter:a,setMemory:i,setGpu:p,setPrice:m,showForm:u,cpuOptions:h,selectedCpu:x}=S(),d=s[r],v=()=>{var y,j;if(n(r-1),m({step:d.step,price:0}),d.step==="IPv4_addresses"&&t(1),d.step==="Operating_system"&&o(""),d.step==="Bandwidth"&&c(""),d.step==="Data_Center"&&a(""),d.step==="Choose_Storage"){i("");const f=(y=h==null?void 0:h.find(C=>C.cpuName===x))==null?void 0:y.rumOptions[0].memorySSDOptions[0].price;f&&m({step:"Choose_Storage",price:f})}if(d.step==="Choose_Memory"){const f=(j=h==null?void 0:h.find(C=>C.cpuName===x))==null?void 0:j.rumOptions[0].memorySSDOptions[0].price;f&&m({step:"Choose_Storage",price:f}),p(0)}},l=()=>{switch(r){case 0:return e.jsx(U,{});case 1:return e.jsx(X,{});case 2:return e.jsx(Q,{});case 3:return e.jsx(Z,{});case 4:return e.jsx($,{});case 5:return e.jsx(Y,{});case 6:return e.jsx(z,{});case 7:return e.jsx(q,{})}};return e.jsx(e.Fragment,{children:u?e.jsx(e.Fragment,{children:e.jsx(K,{})}):e.jsxs("div",{className:"ourServer",children:[e.jsxs("div",{className:"ourServer_stepsContainer",children:[e.jsx(F,{}),e.jsxs("div",{className:"ourServer_stepsTitle textWight textWight-lg mb-4",children:[r>0&&e.jsxs("div",{className:"backBtn",onClick:v,children:[e.jsx(H,{}),e.jsx("span",{className:" ",children:"Go back"})]}),d.stepTitle,d.text&&e.jsx("div",{className:" textGrey  ",children:d.text})]}),e.jsx("div",{children:l()})]}),e.jsxs("div",{className:"ourServer_priceContainer",children:[r>0&&e.jsx("div",{className:"ourServer_priceBox ourServer_priceBox-list ",children:e.jsx(G,{})}),e.jsx("div",{className:"ourServer_priceBox ourServer_priceBox-price",children:e.jsx(R,{})})]})]})})},re=()=>(M(!1),e.jsx(T,{children:e.jsx(ee,{})}));export{re as default};
