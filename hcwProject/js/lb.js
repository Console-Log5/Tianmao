class Banner1 {
		constructor(newBox,newLi) {
			this.Box=newBox;
			this.li=newLi;
			// 设置索引的下标值
			this.index=0;
			this.Box.style.backgroundImage="url(img/index_img/banner"+this.index+".jpg)";
			this.li[this.index].style.backgroundColor="red";
		}
		// 设置图片
		setImg(){
			this.Box.style.backgroundImage="url(img/index_img/banner"+this.index+".jpg)";
		}
		// 设置li的样式;
		setLiColor(){
			for(let i=0;i<this.li.length;i++){
				if(i==this.index){
					this.li[i].style.backgroundColor="red";
				}else{
					this.li[i].style.backgroundColor="darkgray";
				}
			}
		}
		// 设置返回
		Back(){
			this.index--;
			if(this.index==-1){
				this.index=this.li.length-1;
			}
			this.setImg();
			this.setLiColor();
		}
		// li绑定事件
		Lievent(){
			let that=this;
			for(let i=0;i<this.li.length;i++){
				this.li[i].onmouseover= function(){
					that.index = i;
					that.setImg();
					that.setLiColor();
				}
			}
		}
		// 设置定时器
		setInvearl(){
			let time=null;
			let that=this;
			clearInterval(time);
			time=setInterval(function(){
				that.index++;
				if(that.index==that.li.length){
					that.index=0;
				}
				that.setImg();
				that.setLiColor();
			},1500)
			oBox.onmouseover=function(){
				clearInterval(time);
			}
			oBox.onmouseout=function(){
				that.setInvearl();
			}
		}
	
	}