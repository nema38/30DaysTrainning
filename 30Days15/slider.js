function Slider( container, nav ) {
	this.container = container;
	this.nav = nav;
	
	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;
	
	this.current = 0;
}

Slider.prototype.transition = function( coords )	{
	this.container.animate ( {
		'margin-left': coords || -(this.current * this.imgWidth)
	});
};
