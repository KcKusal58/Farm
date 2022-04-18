/*! For license information please see main.0d86ce4ff355c0512c8b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e.n(r),c=e("./node_modules/lodash/map.js"),a=e.n(c),h=e("./app/components/Canvas/Collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.transformPrefix=n()("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionElements=document.querySelectorAll(".collections__article"),this.collectionElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=a()(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,a()(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else a()(this.medias,(t=>t.show()))}hide(){a()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,a()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));a()(this.collectionElements,((t,e)=>{e===s?t.classList.add(this.collectionElementsActive):t.classList.remove(this.collectionElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),a()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"f8a583721874c0fdbe6f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxPQUFPRyxLQUFPbEIsS0FBS2UsT0FBT0MsVUFDdENoQixLQUFLZSxPQUFPcUUsVUFBWSxRQUc1QnBGLEtBQUtlLE9BQU9HLEtBQU9sQixLQUFLZSxPQUFPQyxRQUUvQixNQUFNZSxFQUFRc0QsS0FBS0MsTUFBTUQsS0FBS0UsS0FBS3ZGLEtBQUtlLE9BQU9DLFFBQVdoQixLQUFLNEIsT0FBTyxHQUFHaUIsT0FBT0UsTUFBUSxHQUFNL0MsS0FBS2UsT0FBT2tELFFBQVVqRSxLQUFLNEIsT0FBTzRELE9BQVMsSUFFckl4RixLQUFLK0IsUUFBVUEsR0FDZi9CLEtBQUswRSxTQUFTM0MsR0FHbEJGLEdBQUFBLENBQUk3QixLQUFLNEIsUUFBUSxDQUFDZSxFQUFPWixLQUNyQlksRUFBTU0sT0FBT2pELEtBQUtlLE9BQU9DLFFBQVNoQixLQUFLK0IsVUFRL0MwRCxVQUNJekYsS0FBS0gsTUFBTTZGLFlBQVkxRixLQUFLSSx3QkN0TXBDdUYsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcbiAgICAgICAgdGhpcy5pZCA9ICdjb2xsZWN0aW9ucydcblxuICAgICAgICB0aGlzLmdsID0gZ2xcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uXG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnknKVxuICAgICAgICB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fd3JhcHBlcicpXG5cbiAgICAgICAgdGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uRWxlbWVudHNBY3RpdmUgPSAnY29sbGVjdGlvbnNfX2FydGljbGUtLWFjdGl2ZSdcblxuICAgICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYScpXG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICAgICAgbGFzdDogMCxcbiAgICAgICAgICAgIGxlcnA6IDAuMSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAxXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuICAgICAgICB0aGlzLm9uUmVzaXplKHtcbiAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAgICAgICB0aGlzLnNob3coKVxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgfVxuXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAgICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbnMuXG4gICAgICovXG5cbiAgICBhc3luYyBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNyYyB9ID0gdGhpcy50cmFuc2l0aW9uLm1lc2gucHJvZ3JhbS51bmlmb3Jtcy50TWFwLnZhbHVlLmltYWdlXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3NyY11cbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYXMuZmluZChtZWRpYSA9PiBtZWRpYS50ZXh0dXJlID09PSB0ZXh0dXJlKVxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMlxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiBtZWRpYS5tZXNoLnBvc2l0aW9uLnksIHo6IDAgfSxcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogbWVkaWEubWVzaC5yb3RhdGlvbixcbiAgICAgICAgICAgICAgICBzY2FsZTogbWVkaWEubWVzaC5zY2FsZVxuICAgICAgICAgICAgfSwgXyA9PiB7XG4gICAgICAgICAgICAgICAgbWVkaWEub3BhY2l0eS5tdWx0aXBsaWVyID0gMVxuXG4gICAgICAgICAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lZGlhICE9PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNob3coKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSBzY3JvbGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlbnRzLlxuICAgICAqL1xuXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG4gICAgfVxuXG4gICAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuICAgIH1cblxuICAgIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gICAgfVxuXG4gICAgb25XaGVlbCh7IHBpeGVsWSB9KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqICBDaGFuZ2VkLlxuICAgICAqL1xuXG4gICAgb25DaGFuZ2UoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuICAgICAgICBtYXAodGhpcy5jb2xsZWN0aW9uRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25FbGVtZW50c0FjdGl2ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbkVsZW1lbnRzQWN0aXZlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZylgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlLlxuICAgICAqL1xuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnMoKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSAodGhpcy5tZWRpYXNbMF0uYm91bmRzLndpZHRoIC8gMikpIC8gdGhpcy5zY3JvbGwubGltaXQpICogKHRoaXMubWVkaWFzLmxlbmd0aCAtIDEpKVxuXG4gICAgICAgIGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShpbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuaW5kZXgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveS5cbiAgICAgKi9cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmOGE1ODM3MjE4NzRjMGZkYmU2ZlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiaWQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwidGl0bGVzRWxlbWVudCIsImNvbGxlY3Rpb25FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uRWxlbWVudHNBY3RpdmUiLCJtZWRpYXNFbGVtZW50cyIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGVycCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwic3JjIiwibWVzaCIsInByb2dyYW0iLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsImltYWdlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwibWVkaWEiLCJmaW5kIiwiYm91bmRzIiwibGVmdCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInVwZGF0ZSIsImFuaW1hdGUiLCJwb3NpdGlvbiIsIngiLCJ5IiwieiIsInJvdGF0aW9uIiwic2NhbGUiLCJfIiwib3BhY2l0eSIsIm11bHRpcGxpZXIiLCJpdGVtIiwic3RhcnQiLCJoaWRlIiwiZXZlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtZW50SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJhYnMiLCJsZW5ndGgiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=