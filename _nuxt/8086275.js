(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{832:function(t,e,r){"use strict";r.r(e);var c=r(561),n=r(553),l=r(602),o=r(599),v=r(578),_=r(637),d=r(729),f=r(640),m=(r(36),r(2)),h=(r(30),{data:function(){return{data:[]}},created:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$core.getHttp("/api/job/job-detail/");case 2:t.data=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),x=r(61),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{class:t.$vuetify.breakpoint.width>700?"flex flex-wrap justify-center":"flex flex-col w-full items-center"},t._l(t.data,(function(r,m){return e("div",{key:m,staticClass:"p-1",class:t.$vuetify.breakpoint.width>700?"w-300":""},[e(c.a,{attrs:{width:t.$vuetify.breakpoint.width>700?300:350},on:{click:function(e){return t.$router.push("/app/search/".concat(r.id,"/"))}}},[e("template",{slot:"progress"},[e(d.a,{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),e(_.a,{attrs:{height:"150",src:r.image}},[r.approve?e(l.a,{staticClass:"m-2",attrs:{color:"success",small:""}},[e(v.a,{staticClass:"mr-2",attrs:{size:"20"}},[t._v("mdi-check-circle")]),t._v(" ยินดีรับผู้เคยถูกดำเนินคดี")],1):t._e()],1),t._v(" "),e(n.c,{staticClass:"text-limit",staticStyle:{height:"80px"}},[t._v(t._s(r.name)+" ")]),t._v(" "),e(n.b,{staticStyle:{height:"150px"}},[e(o.a,{staticClass:"mt-2"}),t._v(" "),r.office_data?e("div",{staticClass:"my-4 text-subtitle-1"},[e("div",{staticClass:"flex h-full items-center"},[e("img",{staticClass:"h-10 mr-2",attrs:{src:t.$url+r.office_data.image,alt:""}}),t._v(" "),e("span",{staticClass:"text-xs"},[t._v(t._s(r.office_data.name))])])]):t._e(),t._v(" "),e("div",{staticClass:"text-limit"},[t._v(t._s(r.content))])],1),t._v(" "),e(o.a,{staticClass:"mx-4"}),t._v(" "),e(n.a,[e("span",{staticClass:"text-xs"},[t._v(t._s(t.$kit.dateTH(r.created_at)))]),t._v(" "),e(f.a),t._v(" "),e(l.a,{attrs:{small:""}},[e(v.a,{staticClass:"mr-2"},[t._v("mdi-eye")]),t._v(" "+t._s(r.views))],1)],1)],2)],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);