var radius = 20;
var dots = 0;
var anim;
var running;

function getRandom(l, r) {
	return l+Math.floor(Math.random()*(r-l+1));
}

function init() {
	dots = document.getElementsByClassName('dot').length;
	for(i=0;i<dots;i++) {
		var item = document.getElementsByClassName('dot')[i];
		var x = getRandom(0,100);
		var y = getRandom(0,100);
		item.style.left = "calc("+x+"% - 50px)";
		item.style.top = "calc("+y+"% - 50px)";
	}

	running = true;

	anim = setInterval(function() {
		for(i=0;i<dots;i++) {
			var item = document.getElementsByClassName('dot')[i];
			
			var item_x = item.style.left;
			item_x = item_x.substring(5, item_x.indexOf('%'));
			item_x = (item_x<0)?0:item_x;
			item_x = (item_x>100)?100:item_x;

			var item_y = item.style.top;
			item_y = item_y.substring(5, item_y.indexOf('%'));
			item_y = (item_y<0)?0:item_y;
			item_y = (item_y>100)?100:item_y;

			//var x = getRandom(((item_x-radius)<0)?0:(item_x-radius), ((item_x+radius)>100)?100:(item_x+radius));
			//var y = getRandom(((item_y-radius)<0)?0:(item_y-radius), ((item_y+radius)>100)?100:(item_y+radius));

			var x = getRandom(0, 100);
			var y = getRandom(0, 100);

			item.style.left = "calc("+x+"% - 50px)";
			item.style.top = "calc("+y+"% - 50px)";
			item.style.opacity = Math.random();
			item.style.transform = "scale(" + getRandom(0.5,1.5) +")";
		}
	}, 1600);
}

document.getElementsByTagName('body')[0].addEventListener('click', function() {
	if(running) {
		clearInterval(anim);
	}
	else {
		anim = setInterval(function() {
			for(i=0;i<dots;i++) {
				var item = document.getElementsByClassName('dot')[i];
				
				var item_x = item.style.left;
				item_x = item_x.substring(5, item_x.indexOf('%'));
				item_x = (item_x<0)?0:item_x;
				item_x = (item_x>100)?100:item_x;

				var item_y = item.style.top;
				item_y = item_y.substring(5, item_y.indexOf('%'));
				item_y = (item_y<0)?0:item_y;
				item_y = (item_y>100)?100:item_y;

				//var x = getRandom(((item_x-radius)<0)?0:(item_x-radius), ((item_x+radius)>100)?100:(item_x+radius));
				//var y = getRandom(((item_y-radius)<0)?0:(item_y-radius), ((item_y+radius)>100)?100:(item_y+radius));

				var x = getRandom(0, 100);
				var y = getRandom(0, 100);

				item.style.left = "calc("+x+"% - 50px)";
				item.style.top = "calc("+y+"% - 50px)";
				item.style.opacity = Math.random();
				item.style.transform = "scale(" + getRandom(0.5,1.5) +")";
			}
		}, 1600);
	}
	running = !running;
});

init();