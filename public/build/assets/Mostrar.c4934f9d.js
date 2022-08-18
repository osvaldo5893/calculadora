import{_}from"./AppLayout.159a905e.js";import{L as b,D as p,o as l,c as y,w as c,a as t,v as u,E as m,e as x,h as v,F as w,t as n,b as k,m as N,i as L}from"./app.c5aac2f1.js";import{_ as z}from"./_plugin-vue_export-helper.cdc0426e.js";const C={props:{},components:{AppLayout:_,Link:b},data(){return{inversion:0,plazo:1,registros:[],rinversion:0}},methods:{submit(){this.registros=[],this.rinversion=0;let e=this.inversion;for(let s=0;s<this.plazo;s++){let d=e+e*.0125,a=e+e*.025,o=e+e*.05,i={cuatro:this.roundNumber(d),ocho:this.roundNumber(a),doce:this.roundNumber(o)};e=0,e+=o,this.registros.push(i)}this.rinversion=e-this.inversion},roundNumber(e){return e.toFixed(3)}}},V=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Calculadora ",-1),B={class:"py-12"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},A={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},F=t("div",{class:"grid grid-cols-3 gap-5 md:gap-8 mt-5 mx-7"},[t("div",{class:"grid grid-cols-1 col-start-2"},[t("label",{for:"firstName",class:"uppercase text-center md:text-sm text-xs text-gray-500 text-light font-semibold"},"Tasa de interes anual%"),t("input",{type:"text",id:"firstName",readonly:"",value:"5%",class:"py-2 px-3 text-center rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"})])],-1),I={class:"grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7"},M={class:"grid grid-cols-1"},T=t("label",{for:"inver",class:"uppercase text-center md:text-sm text-xs text-gray-500 text-light font-semibold"},"Ingresa tu Inversi\xF3n",-1),E={class:"grid grid-cols-1"},U=t("label",{for:"plazo",class:"uppercase text-center md:text-sm text-xs text-gray-500 text-light font-semibold"},"Ingresa el plazo",-1),j={class:"p-5"},R={class:"rounded-t-lg mt-5 min-w-full mx-auto bg-gray-800 text-gray-100"},S=t("thead",null,[t("tr",{class:"text-left border-b border-gray-300"},[t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider"},"#"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider"},"4 meses"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider"},"8 meses"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider"},"12 meses")])],-1),$={class:"text-center"},q={class:""},G={class:"px-6 py-4 whitespce-nowrap"},H={class:"flex items-center"},J={class:"ml-4"},K={class:"text-sm font-medium"},O={class:"px-6 py-4 whitespce-nowrap"},P={class:"flex items-center"},Q={class:"ml-4"},W={class:"text-sm font-medium"},X={class:"px-6 py4 whitespce-nowrap"},Y={class:"p-3"},Z={class:"rounded-t-lg mt-5 min-w-full mx-auto bg-gray-800 text-gray-100"},tt=t("thead",null,[t("tr",{class:"text-left border-b border-gray-300"},[t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider"},"Rendimiento")])],-1),et={class:"text-center"},st={class:"flex justify-end md:gap-8 gap-4 pt-5 pb-5 pr-5"},ot=L(" Cancelar ");function rt(e,s,d,a,o,i){const g=p("Link"),h=p("AppLayout");return l(),y(h,{title:"Dashboard"},{header:c(()=>[V]),default:c(()=>[t("div",B,[t("div",D,[t("div",A,[F,t("div",I,[t("div",M,[T,u(t("input",{type:"number",id:"inver",min:"0","onUpdate:modelValue":s[0]||(s[0]=r=>o.inversion=r),class:"py-2 px-3 text-center rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[m,o.inversion]])]),t("div",E,[U,u(t("input",{type:"number",id:"plazo",min:"0","onUpdate:modelValue":s[1]||(s[1]=r=>o.plazo=r),class:"py-2 px-3 text-center rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"},null,512),[[m,o.plazo]])])]),t("div",j,[t("table",R,[S,t("tbody",null,[(l(!0),x(w,null,v(o.registros,(r,f)=>(l(),x("tr",$,[t("td",q,n(f+1)+" a\xF1o",1),t("td",G,[t("div",H,[t("div",J,[t("div",K," $ "+n(r.cuatro),1)])])]),t("td",O,[t("div",P,[t("div",Q,[t("div",W," $ "+n(r.ocho),1)])])]),t("td",X,"$ "+n(r.doce),1)]))),256))])])]),t("div",Y,[t("table",Z,[tt,t("tbody",null,[t("tr",et,[t("td",null,n(i.roundNumber(o.rinversion)),1)])])])]),t("div",st,[k(g,{class:"flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200",as:"button",method:"get",href:e.route("dashboard")},{default:c(()=>[ot]),_:1},8,["href"]),t("button",{type:"submit",onClick:s[2]||(s[2]=N(r=>i.submit(),["prevent"])),class:"flex-shrink-0 bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"}," Calcular ")])])])])]),_:1})}const ct=z(C,[["render",rt]]);export{ct as default};