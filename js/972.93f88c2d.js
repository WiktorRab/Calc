"use strict";(globalThis["webpackChunkcalc"]=globalThis["webpackChunkcalc"]||[]).push([[972],{1693:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9665),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9835),vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6970),vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(499),src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(254),quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9302);const _hoisted_1={class:"row justify-center"},_hoisted_2={class:"column justify-end q-gutter-y-sm",style:{height:"90vh"}},_hoisted_3={class:"row justify-between q-mx-sm"},_hoisted_4={class:"row justify-between q-mx-sm"},_hoisted_5={class:"row justify-between q-mx-sm"},_hoisted_6={class:"row justify-between q-mx-sm"},_hoisted_7={class:"row justify-between q-mx-sm"},_hoisted_8={class:"row justify-between q-mx-sm"},_hoisted_9=(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",{class:"text-h6"},"History of calculations",-1),__WEBPACK_DEFAULT_EXPORT__={__name:"IndexPage",props:{modelValue:Boolean},emits:["update:modelValue"],setup(__props){const $q=(0,quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_3__.Z)(),wartosc=(0,vue__WEBPACK_IMPORTED_MODULE_4__.iH)("");function oblicz(){try{const current=wartosc.value;wartosc.value=String(eval(wartosc.value.replace(/,/g,".").replace("^","**").replace(/π/g,"3.1415926536").replace("%","/100").replace(/√[(](.+?)[)]/g,"Math.sqrt($1)"))).replace(".",","),current.match(/[+*/^%]/)&&todos.value.push(`${current} = ${wartosc.value}`)}catch{$q.notify({message:"error",color:"negative"})}}function onOperator(_){wartosc.value.match(/^[-]?$/)&&_.match(/[+*/^%]/)||wartosc.value.endsWith(_)||(wartosc.value.match(/[^0-9%()π]$/)?wartosc.value=wartosc.value.slice(0,-1)+_:wartosc.value+=_)}const todos=(0,vue__WEBPACK_IMPORTED_MODULE_4__.iH)([]);return(_,e)=>{const E=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-item-section"),s=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-item"),a=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-card-section"),c=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-separator"),u=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-item-label"),o=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-virtual-scroll"),l=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-btn"),t=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-card-actions"),O=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-card"),P=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-dialog"),D=(0,vue__WEBPACK_IMPORTED_MODULE_1__.up)("q-page"),M=(0,vue__WEBPACK_IMPORTED_MODULE_1__.Q2)("close-popup");return(0,vue__WEBPACK_IMPORTED_MODULE_1__.wg)(),(0,vue__WEBPACK_IMPORTED_MODULE_1__.j4)(D,{padding:""},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_1,[(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_2,[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(s,{class:"bg-grey-3 q-mx-sm"},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(E,{class:"text-h4 text-bold",style:{width:"85vw","max-width":"350px",height:"30vh","word-break":"break-all","justify-content":"unset"}},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Uk)((0,vue__WEBPACK_IMPORTED_MODULE_5__.zw)(wartosc.value),1)])),_:1})])),_:1}),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_3,[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[0]||(e[0]=_=>onOperator("%")),class:"bg-blue-4",icon:"%"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[1]||(e[1]=_=>wartosc.value=wartosc.value+"π"),class:"bg-blue-4",icon:"π"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[2]||(e[2]=_=>wartosc.value+="("),class:"bg-blue-4",label:"("}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[3]||(e[3]=_=>wartosc.value+=")"),class:"bg-blue-4",label:")"})]),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_4,[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[4]||(e[4]=_=>wartosc.value=""),class:"bg-red-4",label:"AC"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[5]||(e[5]=_=>""!==wartosc.value&&(wartosc.value+="^")),class:"bg-blue-4",icon:"^"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[6]||(e[6]=_=>wartosc.value+="√("),class:"bg-blue-4",icon:"√"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[7]||(e[7]=_=>onOperator("/")),class:"bg-blue-4",icon:"/"})]),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_5,[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[8]||(e[8]=_=>wartosc.value+="7"),label:"7"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[9]||(e[9]=_=>wartosc.value+="8"),label:"8"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[10]||(e[10]=_=>wartosc.value+="9"),label:"9"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[11]||(e[11]=_=>onOperator("*")),icon:"close",class:"bg-blue-4"})]),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_6,[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[12]||(e[12]=_=>wartosc.value+="4"),label:"4"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[13]||(e[13]=_=>wartosc.value+="5"),label:"5"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[14]||(e[14]=_=>wartosc.value+="6"),label:"6"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[15]||(e[15]=_=>onOperator("-")),icon:"remove",class:"bg-blue-4"})]),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_7,[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[16]||(e[16]=_=>wartosc.value+="1"),label:"1"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[17]||(e[17]=_=>wartosc.value+="2"),label:"2"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[18]||(e[18]=_=>wartosc.value+="3"),label:"3"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[19]||(e[19]=_=>onOperator("+")),icon:"add",class:"bg-blue-4"})]),(0,vue__WEBPACK_IMPORTED_MODULE_1__._)("div",_hoisted_8,[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[20]||(e[20]=_=>wartosc.value.endsWith(",")||(wartosc.value+=",")),label:","}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[21]||(e[21]=_=>wartosc.value+="0"),label:"0"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[22]||(e[22]=_=>wartosc.value=wartosc.value.slice(0,-1)),icon:"backspace"}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(src_components_CalcBtn_vue__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:e[23]||(e[23]=_=>""!==wartosc.value&&oblicz()),icon:"drag_handle",class:"bg-blue-4"})])]),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(P,{modelValue:__props.modelValue,"onUpdate:modelValue":e[25]||(e[25]=e=>_.$emit("update:modelValue",e))},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(O,{style:{width:"95vw"}},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(a,null,{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[_hoisted_9])),_:1}),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(c),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(o,{style:{height:"60vh"},items:todos.value,separator:""},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((({item:_,index:e})=>[((0,vue__WEBPACK_IMPORTED_MODULE_1__.wg)(),(0,vue__WEBPACK_IMPORTED_MODULE_1__.j4)(s,{key:e,dense:""},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(E,null,{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(u,{class:"text-h6"},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.Uk)((0,vue__WEBPACK_IMPORTED_MODULE_5__.zw)(_),1)])),_:2},1024)])),_:2},1024)])),_:2},1024))])),_:1},8,["items"]),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(c),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(t,{class:"justify-around"},{default:(0,vue__WEBPACK_IMPORTED_MODULE_1__.w5)((()=>[(0,vue__WEBPACK_IMPORTED_MODULE_1__.wy)((0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(l,{label:"close",color:"blue-4"},null,512),[[M]]),(0,vue__WEBPACK_IMPORTED_MODULE_1__.Wm)(l,{onClick:e[24]||(e[24]=_=>todos.value=[]),icon:"delete",color:"red"})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})}}}},254:(_,e,E)=>{E.d(e,{Z:()=>P});var s=E(9835);function a(_,e){const E=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.j4)(E,{class:"text-h6",style:{width:"23%","max-width":"100px",height:"8vh"}})}var c=E(1639),u=E(963),o=E(9984),l=E.n(o);const t={},O=(0,c.Z)(t,[["render",a]]),P=O;l()(t,"components",{QBtn:u.Z})},9972:(_,e,E)=>{E.r(e),E.d(e,{default:()=>B});var s=E(1693),a=E(9885),c=E(490),u=E(1233),o=E(6278),l=E(4458),t=E(3190),O=E(926),P=E(2366),D=E(3115),M=E(1821),n=E(963),r=E(2146),C=E(9984),v=E.n(C);const W=s.Z,B=W;v()(s.Z,"components",{QPage:a.Z,QItem:c.Z,QItemSection:u.Z,QDialog:o.Z,QCard:l.Z,QCardSection:t.Z,QSeparator:O.Z,QVirtualScroll:P.Z,QItemLabel:D.Z,QCardActions:M.Z,QBtn:n.Z}),v()(s.Z,"directives",{ClosePopup:r.Z})}}]);