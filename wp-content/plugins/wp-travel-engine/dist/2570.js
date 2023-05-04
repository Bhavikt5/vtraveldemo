"use strict";(self.webpackChunkwp_travel_engine=self.webpackChunkwp_travel_engine||[]).push([[2570],{2570:function(e,t,a){a.d(t,{default:function(){return p}});const{dateFormat:r}=window.wteL10n,i={selectedPackage:null,selectedDate:r(null),selectedTime:r(null),packageCategories:{},travelerRecord:{},availablePackages:[],availableTimes:[],extraServices:{},loading:!0,defaultDateFormat:"YYYY-MM-DD",cart:{},formatPrice:function(e){const{currency:t,baseCurrency:a,currencySymbol:r,format:{number:i,price:s}}=wteL10n;let o={[a]:1};if("undefined"!=typeof wteCc&&wteCc?.code)for(let e in wteCc.code)o={...o,[wteCc.code[e]]:wteCc.rate[e]};return e*=+o[t],wteL10n.helpers.priceFormat(e,t,r,s,+i.decimal,i.decimalSeparator,i.thousandSeparator)},groupPricings:{},cartTotal:{travelers:0}},s=Redux.createStore((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRIP":return{...e,trip:t.data};case"UPDATE_STORE":return{...e,...t.data};case"SET_DATE":return{...e,selectedDate:t.date};case"SET_TIME":return{...e,selectedTime:t.data};case"SET_PACKAGE":return{...e,selectedPackage:t.data};case"SET_TRAVELER_RECORD":return{...e,travelerRecord:t.data};default:return e}}),Redux.applyMiddleware((e=>t=>a=>"function"==typeof a?a(e.dispatch,e.getState):t(a))));var o=s;const n=lodash,{api:c,util:l,priceFormat:d,dateFormat:g}=window.wteL10n;var p=class{constructor(e){var t;this.bookingform=e,this.summaryTemplate=wp.template("wte-booking-summary"),this.datetimeTemplate=wp.template("wte-booking-datetime"),this.extraServicesAPI=(t=this,()=>{let e=t._store,{trip:a}=e.getState();if(a.trip_extras.length<1)return;document.getElementById("wte-booking-extraservices-content").innerHTML=wp.template("wte-booking-extraservices")(),e.subscribe((()=>{let t=e.getState().services||{},a="";for(let r in t){let i=t[r],s=i?.meta.wte_services.service_type;a+=wp.template(`wte-booking-es-${s}`)({service:i,extraServices:e.getState().extraServices})}document.getElementById("wte-booking-extraservices__services").innerHTML=a,document.getElementById("wte-booking-es-summary-content").innerHTML=wp.template("wte-booking-es-summary")(e.getState())})),e.dispatch(((t,r)=>{fetch(`${wteL10n.wpapi.root}${wteL10n.wpapi.versionString}wte-services?include=${a.trip_extras?.join(",")}`).then((t=>{t.json().then((t=>{t&&e.dispatch({type:"UPDATE_STORE",data:{services:lodash.keyBy(t,"id")}})}))}))}));const r=function(t){var a;let r=this,i=r.closest(".wte-booking-es-counter").dataset.info;i=i&&JSON.parse(i);let{serviceID:s,option:o}=i,n={[o]:1},c=0;if(r.classList.contains("wte-up"))c=1;else{if(!r.classList.contains("wte-down"))return;c=-1}let{extraServices:l,services:d,cartTotal:g,cart:p}=e.getState(),m=c>0?1:0;if(l[s]&&(m=c>0?l[s][o]?+l[s][o].count+1:1:l[s][o]?+l[s][o].count-1:0),m<0)return;let u=d[s]||{},f=null!==(a=u?.meta?.wte_services)&&void 0!==a?a:{},h=0,b="",v="unit";f?.service_type&&("custom"===f.service_type?(b=f.options[o],h=+f.prices[o],v=f.service_unit):(b=u.title.rendered,h=+f.service_cost,v=f.service_unit)),n={...l[s],[o]:{count:m<0?0:m,unitPrice:h,label:b,per:v}};let k={...l,[s]:n},w=0,T=[];for(let e in k){let t=k[e];for(let e in t){let a=t[e];w+=+a.count*+a.unitPrice,+a.count>0&&(T=[...T,{extra_service:a.label,qty:a.count,price:+a.unitPrice}])}}p={...p,extraServices:T},e.dispatch({type:"UPDATE_STORE",data:{extraServices:k,cartTotal:{...g,services:w},cart:p}})};l.on("change",".wte-booking-es-select",(function(t){let a=this,r=a.dataset.info;r=r&&JSON.parse(r);let{extraServices:i,services:s}=e.getState(),{serviceID:o,option:n}=r,{options:c,service_unit:l,prices:d}=s[o].meta.wte_services,g={};g={...i,[o]:{[a.value]:{count:0,label:c[a.value],per:l,unitPrice:d[a.value]}}},e.dispatch({type:"UPDATE_STORE",data:{extraServices:g}})})),l.on("click",".wte-booking-es-counter .wte-up",r),l.on("click",".wte-booking-es-counter .wte-down",r)}),this._store=o,this.unsubscriber=this._store.subscribe((()=>{!this._store.getState().loading&&this._store.getState().trip&&(console.info("Initialize Booking Process",this._store.getState()),this.init())})),this._store.subscribe((()=>{this.updateSelectedTime(),this.updateSummary(),this.updatePackageTabContent()})),this._store.dispatch(((e,t)=>{const a=setInterval((()=>{if(window.wtePreFetch?.data){const{trip:t,tripPackages:r,pricingCategories:i}=window.wtePreFetch.data;e({type:"UPDATE_STORE",data:{loading:!1,trip:t,tripPackagesIds:t.packages_ids||[],tripPackages:n.keyBy(r,"id"),pricingCategories:n.keyBy(i,"id"),primaryCategory:Object.values(i).find((e=>e["is-primary"]))}}),clearInterval(a)}}),400)})),this.priceFormat=function(e){return d(e)},this.cart={},this.currentTab=0,this.tabController={},this.timeformat="h:mm A",this.timeformatter=e=>(wteL10n.format.datetime.timezone,moment(e).format(this.timeformat)),this.addToCart=async()=>{const{wpxhr:{root:e},tripID:t,_nonces:{addtocart:a}}=wteL10n;let{cart:r,selectedPackage:i,selectedDate:s,selectedTime:o,travelerRecord:n,cartTotal:c,packageCategories:l,groupPricings:d,timeRange:g,trip:p}=this._store.getState();if(""!=p.min_pax&&+p.min_pax>r.traveler)throw Error(wteL10n?.l10n?.invalidCartTraveler?.replace("%s",p.min_pax));if(!r?.traveler||r.traveler<1)throw Error(wteL10n?.l10n?.invalidCartTraveler?.replace("%s",1));wteL10n.format.datetime.GMTOffset;let m=i,u=s.format("YYYY-MM-DD"),f=n,h={};for(let e in f){let t=f[e];if(t<1)continue;let a=l[e],r={pax:t,salePrice:a?.salePrice?+a.salePrice:0,groupDiscountPrice:0,cost:+a.price};if(a.enabledSale&&(r.cost=a.salePrice),a.enabledGroupDiscount&&d&&d[e])for(let i of d[e]){if(i.to.length<1){r.cost=i.price.length>0?+i.price:+a.price;break}if(t>=+i.from&&t<=+i.to){r.cost=i.price.length>0?+i.price:+a.price;break}}r.categoryInfo=a,h={...h,[e]:r}}let b=o.get()?o.format("YYYY-MM-DDTHH:mm"):"";c=Object.values(c).reduce((function(){return+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+ +(arguments.length>1?arguments[1]:void 0)})),r={...r,nonce:a,tripID:t,packageID:m,tripDate:u,tripTime:b,timeRange:g?.map((e=>e.format("YYYY-MM-DDTHH:mm")))||[],travelers:f,cartTotal:c,pricingOptions:h,cversion:wteL10n?.cart_version||"2.0"};const v=await fetch(`${e}?action=wte_add_trip_to_cart&cart_version=${r.cversion}&_nonce=${a}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!v.ok)throw new Error(v.statusText);try{const e=await v.json();if(e.success)return window.location.href=e.data.redirect,e;if(e.data&&e.data[0])throw Error(e.data[0])}catch(e){throw Error(e.message)}}}init(){this.unsubscriber(),this.loadTemplates(),this.initTabController(),this.initCalendar(),this.eventListeners(),this.bookingProcessFlowControl()}initTabController(){var e=this;let t=this.bookingform.querySelectorAll(".wte-process-nav-item"),a=this.bookingform.querySelectorAll(".wte-process-tab-item");var r;this.tabController={tabCount:t?.length,navigators:t,activeTab:"wte-booking-datetime",activeClass:"active",completedClass:"finish",nextBtn:"#wteProcessNext",prevBtn:"#wteProcessPrev",toggleNextBtn:function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const a=document.querySelector(e.nextBtn);a&&(a.disabled=t)},finalAction:(r=this,async function(){let e=document.querySelector(r.tabController.nextBtn);e&&(e.disabled=!0,e.classList.add("btn-loading"));try{const t=await r.addToCart();if(!t.success)throw Error(t.message);e.disabled=!0,e.classList.toggle("btn-loading",!0)}catch(t){e.disabled=!1,e.classList.toggle("btn-loading",!1),alert(t.message)}}),validToNextProcess:(e=>function(){let t=e.tabController,a=document.querySelector(t.nextBtn);switch(t.activeTab){case"wte-booking-datetime":const{selectedDate:t,availableTimes:r,selectedTime:i}=e._store.getState();return t&&t?.get()&&(Object.keys(r).length<1||Object.keys(r).length&&i?.get());case"wte-booking-packages":const{cart:s}=e._store.getState();return s?.traveler&&s.traveler>0?(a.disabled=!1,!0):(a.disabled=!0,!1);default:return!0}})(this),switchBtnText:function(){let e=WTEBooking.tabController,t=document.querySelector(e.nextBtn);e.getActiveTabIndex()>=e.tabCount-1?t.textContent=t.dataset.labelCheckout||"Add to Cart":t.textContent=t.dataset.labelDefault||"Continue"},getActiveTabIndex:function(){let e=document.getElementById(this.activeTab);return Array.prototype.indexOf.call(a,e)},handleProcessBtnClick:function(e){let t=WTEBooking.tabController;if(this.matches(t.prevBtn))t.activeTab=a[t.getActiveTabIndex()-1].id;else if(this.matches(t.nextBtn)){let e=t.getActiveTabIndex()+1;if(e>=t.tabCount)t.finalAction();else{let r=a[e].id;t.validToNextProcess()&&(t.activeTab=r)}}t.switchBtnText(),t.getActiveTabIndex()>0?document.querySelector(t.prevBtn).style.removeProperty("display"):document.querySelector(t.prevBtn).style.display="none",t.showActiveTab()},init:function(){let e=this;e.showActiveTab();let t=+e.getActiveTabIndex();t<1&&(document.querySelector(e.prevBtn).style.display="none"),document.querySelector(".wte-process-nav-list").style.setProperty("--step-bar-width",(t+1)/3*100+"%"),l.on("click",e.nextBtn,e.handleProcessBtnClick),l.on("click",e.prevBtn,e.handleProcessBtnClick)},showActiveTab:function(){let e=this,t=+e.getActiveTabIndex();if(t<0)t=0;else if(t>=e.tabCount)t=e.tabCount-1;else{document.querySelector(".wte-process-nav-list").style.setProperty("--step-bar-width",(t+1)/3*100+"%");for(let r in Array.from(e.navigators)){let i=e.navigators[r];if(r<=t){if(r<t?i.classList.add(e.completedClass):i.classList.add(e.activeClass),r==t){for(let e in Array.from(a))a[e].style.removeProperty("display");document.querySelector("a"===i.tagName.toLowerCase()?i.hash:i.dataset.target).style.display="block"}}else i.classList.remove(e.activeClass,e.completedClass)}}}},this.tabController.init()}getJSONData(){return{trip:this.trip,tripPackages:this.tripPackages,availablePackages:this.availablePackages,selectedPackage:this.selectedPackage,packageCategories:this.getPackageCategories(this.selectedPackage),travelerRecord:this.travelerRecord,groupPricings:this.selectedPackage?this.tripPackages[this.selectedPackage]["group-pricing"]:{},formatPrice:this.formatPrice,selectedDate:this.selectedDate,cartTotal:this.calculateCartTotal(),selectedTime:this.selectedTime,availableTimes:this.availableTimes,extraServices:this.extraServices}}loadTemplates(){document.getElementById("wte-booking-datetime-content").innerHTML=this.datetimeTemplate(this._store.getState()),document.getElementById("wte-booking-packages-content").innerHTML=wp.template("wte-booking-packages")(this._store.getState()),document.getElementById("wte-booking-summary").innerHTML=wp.template("wte-booking-summary")(this._store.getState()),document.dispatchEvent(new Event("wteLoadBookingTemplates"))}calculateCartTotal(){let e=this.travelerRecord,t=0;for(let r in e){let i=e[r],s=this.getPackageCategories(this.selectedPackage)[r],o=s.enabledSale?+s.salePrice:+s.price,n=this.selectedPackage?this.tripPackages[this.selectedPackage]["group-pricing"]:{};if(Object.keys(n).length>0&&n[r]){var a=n[r];for(let e of a){if(e.to.length<1){o=e.price||o;break}if(+i>=+e.from&&+i<=+e.to){o=e.price;break}}}t+=o*+i}return t}eventListeners(){var e;l.on("click",".wte-package-select-btn",(e=this,function(t){let a=this.dataset.packageId,{tripPackages:r}=e._store.getState();const i=e.getDefaultCart(a);e._store.dispatch({type:"UPDATE_STORE",data:{selectedPackage:a,packageCategories:e.getPackageCategories(a),groupPricings:a?r[a]["group-pricing"]:{},...i}})}));const t=e=>function(t){let a=this,r=0;if(a.classList.contains("wte-up"))r=1;else{if(!a.classList.contains("wte-down"))return;r=-1}let{travelerRecord:i,cart:s,cartTotal:o,packageCategories:n,tripPackages:c,selectedPackage:l,trip:d,selectedTime:g,selectedDate:p,parentDateConfig:m}=e._store.getState(),u={...s},f={...i},h=a.parentElement.dataset.info;h=h&&JSON.parse(h);const b=h.catID;if(f[b]<1&&r<0)return;let v=0;if(r>0?(v=f[b]?+f[b]+1:1,u.traveler=u?.traveler?+u.traveler+1:1):(v=f[b]&&f[b]>=1?+f[b]-1:0,u.traveler=u?.traveler?+u.traveler-1:0),v<0)return;let k=n[b].minPax;k&&v<k&&(u.traveler=u.traveler-r*(1-k),v=r<0?0:k);let w=n[b].maxPax;if(w&&v>w&&(u.traveler=u.traveler-1,v=w),""!=d.max_pax&&+d.max_pax<u.traveler)return void alert(wteL10n?.l10n?.availableSeatsExceed?.replace("%s",d.max_pax));let T=-1;if(g.get()){let e=g.format("YYYY-MM-DD-HH-mm-ss").split("-");e[1]=e[1]-1,T=.001*new Date(Date.UTC(...e)).getTime()}else if(p?.get()){let e=p.format("YYYY-MM-DD").split("-");e[1]=e[1]-1,T=.001*new Date(Date.UTC(...e)).getTime()}if(m&&d["booked-seats"]&&d["booked-seats"][T]&&parseInt(d["booked-seats"][T]?.booked)){const e=m&&m?._seats?parseInt(m._seats)-parseInt(d["booked-seats"][T].booked):-1;if(""!==m._seats&&e>-1&&e<u.traveler)return void alert(wteL10n?.l10n?.availableSeatsExceed?.replace("%s",e))}else if(m&&parseInt(m._seats)<+u.traveler)return void alert(wteL10n?.l10n?.availableSeatsExceed?.replace("%s",m._seats));f={...f,[b]:v};let _=0;for(let e in f){let t=f[e],a=n[e],r=a.enabledSale?+a.salePrice:+a.price,i=c[l]["group-pricing"]||{};if(a.enabledGroupDiscount&&Object.keys(i).length>0&&i[e]){var y=i[e];for(let e of y){if(e.to.length<1){r=e.price||r;break}if(+t>=+e.from&&+t<=+e.to){r=e.price;break}}}_+="per-group"===a.pricingType?t&&+r||0:r*+t}e._store.dispatch({type:"UPDATE_STORE",data:{travelerRecord:f,cart:u,cartTotal:{...o,travelers:_}}})};l.on("click",".wte-booking-pc-counter .wte-down",t(this)),l.on("click",".wte-booking-pc-counter .wte-up",t(this)),l.on("click",".wte-time-select-btn",(e=>function(t){let a=this.dataset.time,r=this.dataset.packageId.split(",");const[i,s]=a.split(":");let{tripPackages:o}=e._store.getState();if(e?.tabController?.nextBtn){const t=document.querySelector(e.tabController.nextBtn);t&&(t.disabled=!1)}if(a){const t=r[0],a=e.getDefaultCart(t);e._store.dispatch({type:"UPDATE_STORE",data:{selectedPackage:t,packageCategories:e.getPackageCategories(t),groupPricings:t?o[t]["group-pricing"]:{},selectedTime:g(new Date(+i)),timeRange:[g(new Date(+i)),g(new Date(+s))],availablePackages:r.map((e=>o[e])),...a}})}})(this))}getPackageCategories(e){if(!e)return{};let{tripPackages:t}=this._store.getState();return t[e]["package-categories"]}clear(){this._store.dispatch({type:"UPDATE_STORE",data:{selectedDate:g(null),selectedTime:g(null),selectedPackage:null,defaultDateFormat:"YYYY-MM-DD",packageCategories:{},travelerRecord:{},cart:{}}})}updateSelectedTime(){document.getElementById("wte-booking-times-content").innerHTML=wp.template("wte-booking-times")(this._store.getState())}getDefaultCart(e){if(!e)return;let{tripPackages:t,trip:a}=this._store.getState();const r=this.getPackageCategories(e),i={};let s={traveler:0},o=0;const n=a?.primary_category;if(!r[n])return{cart:s,cartTotal:{travelers:o},travelerRecord:i};let c=r[n],l=n,d=c.enabledSale?+c.salePrice:+c.price,g=c.minPax?parseInt(c.minPax):0;i[l]=g;let p=t[e]["group-pricing"]||{};if(c.enabledGroupDiscount&&Object.keys(p).length>0&&p[l]){var m=p[l];for(let e of m){if(e.to.length<1){d=e.price||d;break}if(g>=+e.from&&g<=+e.to){d=e.price;break}}}return s.traveler=parseInt(s.traveler)+g,o+="per-group"===c.pricingType?g&&+d||0:d*g,{cart:s,cartTotal:{travelers:o},travelerRecord:i}}bookingProcessFlowControl(e){const t=this;e||this.bookingform.classList.add("wte-bp-flow");const a=document.getElementById("wte-booking-datetime"),r={dateChange:function(){if(a&&t.bookingform.classList.contains("wte-bp-flow")){const e=a.offsetHeight;let t=a.children;if(t[0]){let r=t[0].offsetHeight,i=function(){a.scrollTop<r-e&&(a.scrollTop=r-e>a.scrollTop?a.scrollTop+10:a.scrollTop,setTimeout(i))};i()}}}};r[e]&&r[e]()}initCalendar(){let e=this.getPackagesDates();const t=Object.values(e._nodates);delete e._nodates;let{tripPackages:a,trip:r,cart:i}=this._store.getState();console.debug({_dates:e});let s=e._minDate;delete e._minDate;let o={minDate:s,inline:!0,onChange:(t,i)=>{t[0].getTimezoneOffset(),t=new Date(t[0].getTime());let s=moment(t).format("YYYY-MM-DD");this.clear();let o=[];e[s]&&(o=Object.keys(e[s]).map((e=>a[e])));const n=Object.values(a).filter((e=>Object.values(e["package-dates"]).length<1));o=[...o,...n];let c=o.map((e=>e.id)),l=r?.packages_ids?.find((e=>c.indexOf(e)>-1))||o[0].id,d={};const p=this.getDefaultCart(l),m=e[s]&&e[s][l]||null;if(e[s])for(let[a,i]of Object.entries(e[s])){let e=i;if(!(e._times.length<1))for(let i in e._times){let s=e._times[i],o=s?.from?.split(":"),n=new Date(t);n.setHours(o[0]),n.setMinutes(o[1]);let c=s?.to?.split(":"),l=new Date(t);l.setHours(c[0]),l.setMinutes(c[1]);let g="_"+moment(n).format("HH-mm")+"_"+moment(l).format("HH-mm");if(d[g]){d[g].packages=[...d[g].packages,a];continue}let u=!0;const f=r["booked-seats"],h=.001*n.getTime();if(f&&f[h]){u=!!f[h]?.booked&&+f[h]?.booked>0;let e=m?._seats&&f[h]?.booked?+m._seats-+f[h].booked:-1;u=!p?.cart?.traveler&&e>0&&e>p?.cart?.traveler}d[g]={from:n,to:l,packages:[a],formatter:this.timeformatter,isAvailable:u}}}const u=document.querySelector(this.tabController?.nextBtn);t&&Object.values(d).length<=0?u&&(u.disabled=!1):u&&(u.disabled=!0),this._store.dispatch({type:"UPDATE_STORE",data:{...p,parentDateConfig:m,selectedDate:g(t),availablePackages:o,selectedPackage:l,availableTimes:d,packageCategories:this.getPackageCategories(l),groupPricings:l?a[l]["group-pricing"]:{}}}),this.bookingProcessFlowControl("dateChange")},disable:[e=>!1],onReady:function(){const e=document.getElementById("open-booking-modal");if(e&&(e.disabled=!1),window.location.search?.split("&").indexOf("action=fsd_booking")>-1){let t=window.location.search?.replace("?","").split("&").map((e=>e.split("="))).find((e=>"date"===e[0]));e.click(),(arguments.length<=2?void 0:arguments[2])?.setDate(t,!0)}document.dispatchEvent(new Event("bookingCalendarReady"))}};o.disable=[(e=>{let a=s;return r=>!(!s||t.length>0&&moment(r).isSameOrAfter(a)||e[moment(r).format("YYYY-MM-DD")])})({...e})],flatpickr("#wte-booking-date-calendar",o)}formatPrice(e){const{currency:t,baseCurrency:a,currencySymbol:r,format:{number:i,price:s}}=wteL10n;let o={[a]:1};if("undefined"!=typeof wteCc&&wteCc?.code)for(let e in wteCc.code)o={...o,[wteCc.code[e]]:wteCc.rate[e]};return e*=+o[t],wteL10n.helpers.priceFormat(e,t,r,s,+i.decimal,i.decimalSeparator,i.thousandSeparator)}updateSummary(){document.getElementById("wte-booking-summary").innerHTML=wp.template("wte-booking-summary")(this._store.getState())}updatePackageTabContent(){document.getElementById("wte-booking-packages-content").innerHTML=wp.template("wte-booking-packages")(this._store.getState())}_dateToUTC(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("invalid date"!==(e=new Date(moment(e).tz("utc").toDate())).toString().toLowerCase()){let a=0,r=0;if(t){let e=t.split(":");a=+e[0],r=+e[1]}return new Date(Date.UTC(e.getUTCFullYear(),e.getMonth(),e.getDate(),a,r,0,0))}return e}_dateToTripTimeZone(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("invalid date"!==(e=new Date(e)).toString().toLowerCase()){if(e.setHours(0),e.setMinutes(0),e.setSeconds(0),t){let a=t.split(":");e.setHours(+a[0]),e.setMinutes(+a[1])}let a=`${moment(e).format("YYYY-MM-DDTHH:mm:ss")}${wteL10n.format.datetime.timezone}`;return new Date(a)}return e}getPackagesDates(){const{tripPackages:e,trip:t}=this._store.getState();let a={_nodates:[]},r=new Date;r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0),t.cut_off_time?.enabled&&(r=moment(r).add(t.cut_off_time.duration,t.cut_off_time.duration_unit).toDate());for(let i in e){let s=e[i]["package-dates"];if(s&&Object.values(s).length<1)a._nodates=[...a._nodates,i];else for(let e in s){let o=s[e],c=n.get(o,"dtstart",null);c=c.split("-");let l=new Date(Date.UTC(c[0],+c[1]-1,c[2],0,0,0,0)),d=l.getTime(),g=l;const p=n.get(o,"times",[]),m=n.get(o,"rrule",{}),u=!!n.get(o,"is_recurring",!1),f=n.get(o,"seats","");if(moment(g).isSameOrAfter(r)){let e=.001*d;if(""!==f&&t["booked-seats"]&&t["booked-seats"][+e]&&parseInt(t["booked-seats"][+e].booked)>=+f);else{let e=c.join("-");(!a._minDate||+a._minDate>moment(e).valueOf())&&(a._minDate=moment(e).valueOf()),a[e]={...a[e]?a[e]:{},[i]:{_times:p,_rrule:m,_isRecurring:u,_seats:f}}}}if(!u)continue;const{r_frequency:h,r_until:b,r_weekdays:v,r_months:k,r_count:w}=null!=m?m:{};let T={freq:h?rrule.RRule[h.toUpperCase()]:rrule.RRule.DAILY,dtstart:l};if(b){let e=this._dateToUTC(b);if(moment(r).isAfter(e))continue;T.until=e}switch(b||(T.count=w?+w:10),h){case"WEEKLY":T.byweekday=v&&Object.values(v).map((e=>rrule.RRule[e]))||[];break;case"MONTHLY":T.bymonth=k&&Object.keys(k).map((e=>+e))||[]}let _=new rrule.RRule(T).all(),y=0;for(let e in _){let s=_[e];if(moment(s.getTime()).isBefore(r))continue;0==e&&(y=T.dtstart.getTime()-s.getTime());let o=s.getTime()+y;if(""!==f&&t["booked-seats"]&&t["booked-seats"][o]&&parseInt(t["booked-seats"][o].booked)>=+f)continue;let n=moment.tz(moment(s).toISOString(),"UTC").format("YYYY-MM-DD"),c=moment(n).valueOf();(!a._minDate||+a._minDate>c)&&(a._minDate=c),a[n]={...a[n]?a[n]:{},[i]:{_times:p,_rrule:m,_isRecurring:u,_seats:f}}}}}return a._minDate||(a._minDate=r),a}}}}]);