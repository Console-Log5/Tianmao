class Magnifying{
		constructor(newsmall_box,newmask_box,newbig_box) {
			this.samllBox=newsmall_box;
			this.maskBox=newmask_box;
			this.bigBox=newbig_box;
		}
		onmouseover(){
			let that=this;
			this.samllBox.onmouseover=function(){
				that.maskBox.style.display = "block";
				that.bigBox.style.display = "block";
			}
		}
		onmouseout(){
			let that=this;
			this.samllBox.onmouseout=function(){
				that.maskBox.style.display = "none";
				that.bigBox.style.display = "none";
			}
		}
		onmousemove(){
			let that=this;
			this.samllBox.onmousemove=function(evt){
				let e=evt||event;
				// 设置移动鼠标移动带动遮罩层运动
				let left=e.pageX-this.offsetLeft-that.maskBox.offsetWidth/2;
				let top=e.pageY-this.offsetTop-that.maskBox.offsetWidth/2;
				// 判断左右是否越界;
				if(left<0){
					left=0;
				}
				// 最大的右边距
				let Maxleft=this.offsetWidth-that.maskBox.offsetWidth;
				if(left>Maxleft){
					left=Maxleft;
				}
				// 判断上下是否越界;
				if(top<0){
					top=0;
				}
				//最大的上边距
				let Maxtop=this.offsetHeight-that.maskBox.offsetHeight;
				if(top>Maxtop){
					top=Maxtop;
				}
				that.maskBox.style.left=left+"px";
				that.maskBox.style.top=top+"px";
				// 比例关系
				// 遮罩层大小/大盒子的大小=小盒子背景图大小/大盒子背景图片
				let x=left*that.bigBox.offsetWidth/that.maskBox.offsetWidth;
				let y=top*that.bigBox.offsetHeight/that.maskBox.offsetHeight;
				that.bigBox.style.backgroundPositionX = -x + "px";
				that.bigBox.style.backgroundPositionY=-y+"px";
			}
		}
	}