!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Item=void 0;e.Item=class{constructor(t,e){this._id=t,this._title=e}get id(){return this._id}get title(){return this._title}set title(t){this._title=t}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PhotoOrientation=void 0,function(t){t[t.Landscape=0]="Landscape",t[t.Portrait=1]="Portrait",t[t.Square=2]="Square",t[t.Panorama=3]="Panorama"}(e.PhotoOrientation||(e.PhotoOrientation={}))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r(3),n=r(4),o=r(5),u=r(1),s=new i.User(1,"jhoguer","Jhon",!0),a=new n.Album(10,"Platzi Pictures"),c=new o.Picture(1,"TypeScript Course","2020-05",u.PhotoOrientation.Landscape);a.addPicture(c),s.addAlbum(a),console.log("user--\x3e",s),s.removeAlbum(a),console.log("Borrando albun de user--\x3e",s)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.User=void 0;e.User=class{constructor(t,e,r,i){this.id=t,this.username=e,this.firstName=r,this.isPro=i,this.album=[]}addAlbum(t){this.album.push(t)}removeAlbum(t){const e=this.album.findIndex(e=>e.id===t.id);let r;return e>=0&&(r=this.album[e],this.album.splice(e,1)),r}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Album=void 0;const i=r(0);class n extends i.Item{constructor(t,e){super(t,e),this._pictures=[]}addPicture(t){this._pictures.push(t)}}e.Album=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Picture=void 0;const i=r(0),n=r(1);let o=(()=>{class t extends i.Item{constructor(t,e,r,i){super(t,e),this._date=r,this._orientation=i}get orientation(){return this._orientation}set orientation(t){this._orientation=t}toString(){return`[id: ${this.id},\n                 title: ${this.title},\n                 orientation: ${this.orientation}\n                ]`}}return t.photoOrientation=n.PhotoOrientation,t})();e.Picture=o}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bob3RvT3JpZW50YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsYnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9waWN0dXJlLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiSXRlbSIsImlkIiwidGl0bGUiLCJ0aGlzIiwiX2lkIiwiX3RpdGxlIiwiUGhvdG9PcmllbnRhdGlvbiIsInVzZXJfMSIsImFsYnVtXzEiLCJwaWN0dXJlXzEiLCJQaG90b09yaWVudGF0aW9uXzEiLCJ1c2VyIiwiVXNlciIsImFsYnVtIiwiQWxidW0iLCJwaWN0dXJlIiwiUGljdHVyZSIsIkxhbmRzY2FwZSIsImFkZFBpY3R1cmUiLCJhZGRBbGJ1bSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVBbGJ1bSIsInVzZXJuYW1lIiwiZmlyc3ROYW1lIiwiaXNQcm8iLCJwdXNoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJhIiwiZGVsZXRlZEFsYnVtIiwic3BsaWNlIiwiaXRlbV8xIiwic3VwZXIiLCJfcGljdHVyZXMiLCJkYXRlIiwib3JpZW50YXRpb24iLCJfZGF0ZSIsIl9vcmllbnRhdGlvbiIsInBob3RvT3JpZW50YXRpb24iXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRG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bkIsR0FDUFosS0FBSytCLFVBQVVSLEtBQUtYLElBRzVCakQsRUFBUWdELE1BQVFBLEcsNkJDWmhCcEMsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLElBQ3REbkIsRUFBUWtELGFBQVUsRUFDbEIsTUFBTWdCLEVBQVMsRUFBUSxHQUNqQnRCLEVBQXFCLEVBQVEsR0FDbkMsSUFBSU0sRUFBd0IsTUFDeEIsTUFBTUEsVUFBZ0JnQixFQUFPaEMsS0FDekIsWUFBWUMsRUFBSUMsRUFBT2lDLEVBQU1DLEdBQ3pCSCxNQUFNaEMsRUFBSUMsR0FDVkMsS0FBS2tDLE1BQVFGLEVBQ2JoQyxLQUFLbUMsYUFBZUYsRUFFeEIsa0JBQ0ksT0FBT2pDLEtBQUttQyxhQUVoQixnQkFBZ0JGLEdBQ1pqQyxLQUFLbUMsYUFBZUYsRUFHeEIsV0FDSSxNQUFPLFFBQVFqQyxLQUFLRixnQ0FDTkUsS0FBS0QseUNBQ0NDLEtBQUtpQyxrQ0FLakMsT0FEQXBCLEVBQVF1QixpQkFBbUI3QixFQUFtQkosaUJBQ3ZDVSxHQXRCaUIsR0F3QjVCbEQsRUFBUWtELFFBQVVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuSXRlbSA9IHZvaWQgMDtcclxuY2xhc3MgSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IGlkKGlkOiBudW1iZXIpIHtcclxuICAgIC8vICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgLy8gfVxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JdGVtID0gSXRlbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0gdm9pZCAwO1xyXG52YXIgUGhvdG9PcmllbnRhdGlvbjtcclxuKGZ1bmN0aW9uIChQaG90b09yaWVudGF0aW9uKSB7XHJcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJMYW5kc2NhcGVcIl0gPSAwXSA9IFwiTGFuZHNjYXBlXCI7XHJcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQb3J0cmFpdFwiXSA9IDFdID0gXCJQb3J0cmFpdFwiO1xyXG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiU3F1YXJlXCJdID0gMl0gPSBcIlNxdWFyZVwiO1xyXG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiUGFub3JhbWFcIl0gPSAzXSA9IFwiUGFub3JhbWFcIjtcclxufSkoUGhvdG9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiB8fCAoZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0ge30pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcclxuY29uc3QgYWxidW1fMSA9IHJlcXVpcmUoXCIuL2FsYnVtXCIpO1xyXG5jb25zdCBwaWN0dXJlXzEgPSByZXF1aXJlKFwiLi9waWN0dXJlXCIpO1xyXG5jb25zdCBQaG90b09yaWVudGF0aW9uXzEgPSByZXF1aXJlKFwiLi9QaG90b09yaWVudGF0aW9uXCIpO1xyXG5jb25zdCB1c2VyID0gbmV3IHVzZXJfMS5Vc2VyKDEsICdqaG9ndWVyJywgJ0pob24nLCB0cnVlKTtcclxuY29uc3QgYWxidW0gPSBuZXcgYWxidW1fMS5BbGJ1bSgxMCwgJ1BsYXR6aSBQaWN0dXJlcycpO1xyXG5jb25zdCBwaWN0dXJlID0gbmV3IHBpY3R1cmVfMS5QaWN0dXJlKDEsICdUeXBlU2NyaXB0IENvdXJzZScsICcyMDIwLTA1JywgUGhvdG9PcmllbnRhdGlvbl8xLlBob3RvT3JpZW50YXRpb24uTGFuZHNjYXBlKTtcclxuLy8gQ3JlYW1vcyByZWxhY2lvbmVzXHJcbmFsYnVtLmFkZFBpY3R1cmUocGljdHVyZSk7XHJcbnVzZXIuYWRkQWxidW0oYWxidW0pO1xyXG4vLyBjb25zb2xlLmxvZygnYWxidW0tLT4nLCBhbGJ1bSk7XHJcbmNvbnNvbGUubG9nKCd1c2VyLS0+JywgdXNlcik7XHJcbnVzZXIucmVtb3ZlQWxidW0oYWxidW0pO1xyXG5jb25zb2xlLmxvZygnQm9ycmFuZG8gYWxidW4gZGUgdXNlci0tPicsIHVzZXIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVzZXIgPSB2b2lkIDA7XHJcbmNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHVzZXJuYW1lLCBmaXJzdE5hbWUsIGlzUHJvKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgICAgICB0aGlzLmlzUHJvID0gaXNQcm87XHJcbiAgICAgICAgdGhpcy5hbGJ1bSA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkQWxidW0oYWxidW0pIHtcclxuICAgICAgICB0aGlzLmFsYnVtLnB1c2goYWxidW0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQWxidW0oYWxidW0pIHtcclxuICAgICAgICAvLyBCdXNjYXIgZWwgQWxidW1cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxidW0uZmluZEluZGV4KGEgPT4gYS5pZCA9PT0gYWxidW0uaWQpO1xyXG4gICAgICAgIGxldCBkZWxldGVkQWxidW07XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlZEFsYnVtID0gdGhpcy5hbGJ1bVtpbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuYWxidW0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZWRBbGJ1bTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlVzZXIgPSBVc2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFsYnVtID0gdm9pZCAwO1xyXG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xyXG5jbGFzcyBBbGJ1bSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xyXG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5fcGljdHVyZXMgPSBbXTtcclxuICAgIH1cclxuICAgIGFkZFBpY3R1cmUocGljdHVyZSkge1xyXG4gICAgICAgIHRoaXMuX3BpY3R1cmVzLnB1c2gocGljdHVyZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BbGJ1bSA9IEFsYnVtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBpY3R1cmUgPSB2b2lkIDA7XHJcbmNvbnN0IGl0ZW1fMSA9IHJlcXVpcmUoXCIuL2l0ZW1cIik7XHJcbmNvbnN0IFBob3RvT3JpZW50YXRpb25fMSA9IHJlcXVpcmUoXCIuL1Bob3RvT3JpZW50YXRpb25cIik7XHJcbmxldCBQaWN0dXJlID0gLyoqIEBjbGFzcyAqLyAoKCkgPT4ge1xyXG4gICAgY2xhc3MgUGljdHVyZSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRhdGUsIG9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xyXG4gICAgICAgICAgICB0aGlzLl9vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQgb3JpZW50YXRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcmllbnRhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gb3JpZW50YXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENvbXBvcnRhbWllbnRvXHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgW2lkOiAke3RoaXMuaWR9LFxyXG4gICAgICAgICAgICAgICAgIHRpdGxlOiAke3RoaXMudGl0bGV9LFxyXG4gICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiAke3RoaXMub3JpZW50YXRpb259XHJcbiAgICAgICAgICAgICAgICBdYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQaWN0dXJlLnBob3RvT3JpZW50YXRpb24gPSBQaG90b09yaWVudGF0aW9uXzEuUGhvdG9PcmllbnRhdGlvbjtcclxuICAgIHJldHVybiBQaWN0dXJlO1xyXG59KSgpO1xyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9