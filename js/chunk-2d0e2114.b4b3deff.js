(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2114"],{"7cb4":function(t,n,a){"use strict";a.r(n);a("96cf");var r,o,i=a("1da1"),c=a("5530"),s=a("2f62"),u={inject:["axios"],data:function(){return{response:null}},computed:Object(c["a"])({},Object(s["c"])({payment_details:function(e){return e.cart.payment_details},token:function(e){return e.login.token}})),created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("atda"),console.log(t.payment_details),a={key:t.payment_details.key,amount:t.payment_details.amount,currency:t.payment_details.currency,name:"Panaache Jewelz",description:"checkout",image:"http://www.pulsedevelopers.site/panaache/images/logoFull.png",order_id:t.payment_details.id,handler:function(e){t.verify(e)},prefill:{name:t.payment_details.addrDetails.phone,email:t.payment_details.email,contact:t.payment_details.addrDetails.phone},notes:{address:"Razorpay Corporate Office"},theme:{color:"#F37254"}},r=new Razorpay(a),r.open(),e.preventDefault();case 6:case"end":return n.stop()}}),n)})))()},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])({verifyPayment:function(e){return e.verify.verifyPayment}})),{},{verify:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=btoa(JSON.stringify({token:t.token,cacheToken:$cookies.get("cacheToken")})),r=btoa(JSON.stringify(e)),n.next=4,t.axios.post("https://k17hmntqvd.execute-api.ap-south-1.amazonaws.com/api/verifyorder",null,{headers:{verify:r,token:a}}).then((function(e){e.status<=299&&"success"==e.data&&(window.location.href="/myorders")}));case 4:n.sent;case 5:case"end":return n.stop()}}),n)})))()}})},l=u,p=a("2877"),d=Object(p["a"])(l,r,o,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e2114.b4b3deff.js.map