"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=i(function(h,n){
var y=require('@stdlib/blas-ext-base-sfill/dist').ndarray;function p(e,r,s,f){return y(e,1,r,s,f),r}n.exports=p
});var o=i(function(k,u){
var l=require('@stdlib/strided-base-stride2offset/dist'),j=a();function m(e,r,s){return j(e,r,s,l(e,s))}u.exports=m
});var c=i(function(w,q){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=o(),R=a();x(v,"ndarray",R);q.exports=v
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=c(),t,d=E(_(__dirname,"./native.js"));O(d)?t=b:t=d;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
