import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./CPJvTKWj.js";import{u as d}from"./nWRxwXGN.js";import f from"./xm41zcJ3.js";import y from"./DPELdy-s.js";import"./CVayGb2o.js";import"./C77G3VSc.js";import"./_PSxL-jf.js";import"./Bg7FqvYE.js";import"./D-SHwbpB.js";import"./CCUArbxJ.js";import"./G_IlkrVg.js";import"./BJXKna39.js";import"./fl-BTMLe.js";import"./CgFTONPC.js";import"./BMYHqTYo.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-3d4d3b53"]]);export{V as default};
