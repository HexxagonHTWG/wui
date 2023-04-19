import{L,S as B,R as E,P as R,H as C}from"./LoadModal.212fd920.js";import{_ as N,W as G}from"./WebFrame.7c82a093.js";import{i as f,g,h as H,r as n,o as c,c as u,d as o,w as h,j as p,k as r,e as k,t as m,l as b,a as W}from"./index.aea1a63b.js";import"./api.6933fb8f.js";const d=["X","O"],x="E",v=["Turn Player 1","Turn Player 2","GAME OVER"],j={name:"GameView",components:{LoadModal:L,SaveModal:B,ResetModal:E,WebFrame:G,PlayerStone:R,HexTile:C},data(){return{counter1:0,counter2:0,gameStatus:v[0],snackbar:!1,msg:String,turn:d[0],hexField:new Map,neighbors:new Map,columns:9,rows:6}},beforeMount(){this.initBoard()},methods:{initBoard(){for(let t=1;t<=this.rows;t++)for(let e=1;e<=this.columns;e++)this.hexField.set(`${t}:${e}`,x),this.neighbors.set(`${t}:${e}`,t===1&&e===1?[`${t}:${e+1}`,`${t+1}:${e}`]:t===1&&e===this.columns?[`${t}:${e-1}`,`${t+1}:${e}`]:t===this.rows&&e===1?[`${t}:${e+1}`,`${t-1}:${e+1}`,`${t-1}:${e}`]:t===this.rows&&e===this.columns?[`${t}:${e-1}`,`${t-1}:${e-1}`,`${t-1}:${e}`]:t===1?e%2===0?[`${t}:${e-1}`,`${t}:${e+1}`,`${t+1}:${e-1}`,`${t+1}:${e+1}`,`${t+1}:${e}`]:[`${t}:${e-1}`,`${t}:${e+1}`,`${t+1}:${e}`]:t===this.rows?e%2===0?[`${t}:${e-1}`,`${t}:${e+1}`,`${t-1}:${e}`]:[`${t}:${e-1}`,`${t}:${e+1}`,`${t-1}:${e-1}`,`${t-1}:${e+1}`,`${t-1}:${e}`]:e===1?[`${t-1}:${e}`,`${t+1}:${e}`,`${t}:${e+1}`,`${t-1}:${e+1}`]:e===this.columns?[`${t-1}:${e}`,`${t-1}:${e-1}`,`${t}:${e-1}`,`${t+1}:${e}`]:e%2===0?[`${t}:${e-1}`,`${t}:${e+1}`,`${t-1}:${e}`,`${t+1}:${e}`,`${t+1}:${e-1}`,`${t+1}:${e+1}`]:[`${t}:${e-1}`,`${t}:${e+1}`,`${t-1}:${e}`,`${t+1}:${e}`,`${t-1}:${e-1}`,`${t-1}:${e+1}`])},content(t,e){return this.hexField.get(`${t}:${e}`)},clickTile(t,e){if(this.hexField.get(`${t}:${e}`)!==x){this.$refs.frame.soundToggle&&(f.paused?f.play():f.currentTime=0),this.triggerToast("Occupied!");return}this.$refs.frame.soundToggle&&(g.paused?g.play():g.currentTime=0),this.hexField.set(`${t}:${e}`,this.turn);let l=1,$=0;this.neighbors.get(`${t}:${e}`).forEach(a=>{this.hexField.get(a)!==this.turn&&this.hexField.get(a)!==x&&(this.hexField.set(a,this.turn),l++,$++)}),this.turn===d[0]?(this.counter1+=l,this.counter2-=$):(this.counter2+=l,this.counter1-=$);const s=this.turn===d[0]?1:0;this.turn=d[s],this.gameStatus=v[s],Number(this.counter1)+Number(this.counter2)===this.rows*this.columns&&(this.gameOver(),this.gameStatus=v[2])},gameOver:function(){this.$refs.frame.soundToggle&&H.play();const t=this.counter1>this.counter2?"Player 1 wins!":this.counter1<this.counter2?"Player 2 wins!":"It's a draw!";this.triggerToast(t)},triggerToast:function(t){this.msg=t,this.snackbar=!0}}},z={class:"container"},X={class:"game-container"},A={class:"header"},D={class:"counter"},U={class:"status"},Y={class:"counter"},q={class:"tileRow"},J={class:"toast-holder"};function K(t,e,l,$,s,a){const w=n("PlayerStone"),y=n("HexTile"),S=n("WebFrame"),M=n("ResetModal"),F=n("SaveModal"),P=n("LoadModal"),T=n("font-awesome-icon"),V=n("v-btn"),O=n("v-snackbar");return c(),u(p,null,[o(S,{ref:"frame"},{default:h(()=>[r("div",z,[r("div",X,[r("div",A,[r("h2",D,[o(w,{player:"X"}),k(" : "+m(s.counter1),1)]),r("h2",U,m(s.gameStatus),1),r("h2",Y,[o(w,{player:"O"}),k(" : "+m(s.counter2),1)])]),(c(!0),u(p,null,b(s.rows,i=>(c(),u("div",{key:i,class:"row"},[r("div",q,[(c(!0),u(p,null,b(s.columns,_=>(c(),W(y,{key:_,ref_for:!0,ref:"hex",stone:a.content(i,_),onClick:Q=>a.clickTile(i,_)},null,8,["stone","onClick"]))),128))])]))),128))])])]),_:1},512),o(M),o(F),o(P),o(O,{modelValue:s.snackbar,"onUpdate:modelValue":e[1]||(e[1]=i=>s.snackbar=i),color:"white"},{actions:h(()=>[o(V,{color:"red",variant:"text",onClick:e[0]||(e[0]=i=>s.snackbar=!1)},{default:h(()=>[o(T,{class:"m-lg-1",icon:"x",size:"1x"})]),_:1})]),default:h(()=>[o(T,{class:"mt-1 mx-lg-2 fs-2",icon:"triangle-exclamation",size:"1x"}),r("span",J,m(s.msg),1)]),_:1},8,["modelValue"])],64)}const se=N(j,[["render",K],["__scopeId","data-v-862cc866"]]);export{x as EMPTY,d as availableTurns,se as default,v as statusText};
