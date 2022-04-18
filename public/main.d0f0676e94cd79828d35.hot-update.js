/*! For license information please see main.d0f0676e94cd79828d35.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e.n(r),c=e("./node_modules/lodash/map.js"),a=e.n(c),h=e("./app/components/Canvas/Collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.transformPrefix=n()("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionElements=document.querySelectorAll(".collections__article"),this.collectionElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=a()(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerHeight/2;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,a()(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else a()(this.medias,(t=>t.show()))}hide(){a()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,a()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));a()(this.collectionElements,((t,e)=>{e===s?t.classList.add(this.collectionElementsActive):t.classList.remove(this.collectionElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),a()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"0d86ce4ff355c0512c8b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxPQUFPRyxLQUFPbEIsS0FBS2UsT0FBT0MsVUFDdENoQixLQUFLZSxPQUFPcUUsVUFBWSxRQUc1QnBGLEtBQUtlLE9BQU9HLEtBQU9sQixLQUFLZSxPQUFPQyxRQUUvQixNQUFNZSxFQUFRc0QsS0FBS0MsTUFBTUQsS0FBS0UsS0FBS3ZGLEtBQUtlLE9BQU9DLFFBQVdoQixLQUFLNEIsT0FBTyxHQUFHaUIsT0FBT0UsTUFBUSxHQUFNL0MsS0FBS2UsT0FBT2tELFFBQVVqRSxLQUFLNEIsT0FBTzRELE9BQVMsSUFFckl4RixLQUFLK0IsUUFBVUEsR0FDZi9CLEtBQUswRSxTQUFTM0MsR0FHbEJGLEdBQUFBLENBQUk3QixLQUFLNEIsUUFBUSxDQUFDZSxFQUFPWixLQUNyQlksRUFBTU0sT0FBT2pELEtBQUtlLE9BQU9DLFFBQVNoQixLQUFLK0IsVUFRL0MwRCxVQUNJekYsS0FBS0gsTUFBTTZGLFlBQVkxRixLQUFLSSx3QkN0TXBDdUYsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcbiAgICAgICAgdGhpcy5pZCA9ICdjb2xsZWN0aW9ucydcblxuICAgICAgICB0aGlzLmdsID0gZ2xcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uXG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnknKVxuICAgICAgICB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fd3JhcHBlcicpXG5cbiAgICAgICAgdGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uRWxlbWVudHNBY3RpdmUgPSAnY29sbGVjdGlvbnNfX2FydGljbGUtLWFjdGl2ZSdcblxuICAgICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYScpXG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICAgICAgbGFzdDogMCxcbiAgICAgICAgICAgIGxlcnA6IDAuMSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAxXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuICAgICAgICB0aGlzLm9uUmVzaXplKHtcbiAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAgICAgICB0aGlzLnNob3coKVxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgfVxuXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAgICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbnMuXG4gICAgICovXG5cbiAgICBhc3luYyBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNyYyB9ID0gdGhpcy50cmFuc2l0aW9uLm1lc2gucHJvZ3JhbS51bmlmb3Jtcy50TWFwLnZhbHVlLmltYWdlXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3NyY11cbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYXMuZmluZChtZWRpYSA9PiBtZWRpYS50ZXh0dXJlID09PSB0ZXh0dXJlKVxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcblxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogbWVkaWEubWVzaC5wb3NpdGlvbi55LCB6OiAwIH0sXG4gICAgICAgICAgICAgICAgcm90YXRpb246IG1lZGlhLm1lc2gucm90YXRpb24sXG4gICAgICAgICAgICAgICAgc2NhbGU6IG1lZGlhLm1lc2guc2NhbGVcbiAgICAgICAgICAgIH0sIF8gPT4ge1xuICAgICAgICAgICAgICAgIG1lZGlhLm9wYWNpdHkubXVsdGlwbGllciA9IDFcblxuICAgICAgICAgICAgICAgIG1hcCh0aGlzLm1lZGlhcywgaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZWRpYSAhPT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5sYXN0ID0gc2Nyb2xsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZW50cy5cbiAgICAgKi9cblxuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICAgICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2VcbiAgICB9XG5cbiAgICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICAgIH1cblxuICAgIG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiAgQ2hhbmdlZC5cbiAgICAgKi9cblxuICAgIG9uQ2hhbmdlKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpXG5cbiAgICAgICAgbWFwKHRoaXMuY29sbGVjdGlvbkVsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uRWxlbWVudHNBY3RpdmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25FbGVtZW50c0FjdGl2ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7MjUgKiBzZWxlY3RlZENvbGxlY3Rpb259JSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpYFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZS5cbiAgICAgKi9cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG5cbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGguYWJzKCh0aGlzLnNjcm9sbC5jdXJyZW50IC0gKHRoaXMubWVkaWFzWzBdLmJvdW5kcy53aWR0aCAvIDIpKSAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqICh0aGlzLm1lZGlhcy5sZW5ndGggLSAxKSlcblxuICAgICAgICBpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLmluZGV4KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kuXG4gICAgICovXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gICAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGQ4NmNlNGZmMzU1YzA1MTJjOGJcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsImlkIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJjb2xsZWN0aW9uRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbkVsZW1lbnRzQWN0aXZlIiwibWVkaWFzRWxlbWVudHMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxlcnAiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsIm9uUmVzaXplIiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsInNyYyIsIm1lc2giLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsIm1lZGlhIiwiZmluZCIsImJvdW5kcyIsImxlZnQiLCJ3aWR0aCIsImlubmVySGVpZ2h0IiwidXBkYXRlIiwiYW5pbWF0ZSIsInBvc2l0aW9uIiwieCIsInkiLCJ6Iiwicm90YXRpb24iLCJzY2FsZSIsIl8iLCJvcGFjaXR5IiwibXVsdGlwbGllciIsIml0ZW0iLCJzdGFydCIsImhpZGUiLCJldmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpbWl0IiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==