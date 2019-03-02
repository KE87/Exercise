//大灰狼移动

//9个洞的坐标(bottom,left)
//第一行（从左到右）： (860,35) || (950,195) || (898,375) 
// 第二行（从左到右）(740,30) || (800,210) || (760,400) 
// 第三行（从左到右）(595,60) || (635,240) || (590,415) 

//随机坐标生成新的地鼠（大灰狼或者小灰灰）
//倒计时
//计分
//播放动画
var wolf = document.getElementById('wolf');
var time = document.getElementById("time");
var gameover = document.getElementById("gameover");

var num =0;
var play =0;
var minnum=6;
var maxnum=11;
timeLineRun()

var mainTi = setInterval(function(){
    num++;

	//间隔1000 生成一个"地鼠"
			if(num % 5 == 0){
				var div = document.createElement('div');
				var img = document.createElement('img');

				//坐标数组
				var array =[[860,35],[950,195],[898,375],[740,30],[800,210],[760,400],[595,60],[635,240],[590,415]];
				//随机抽取坐标,生成新的图像
			    var coordinate = array[Random(0,8)];

				div.className = 'son';
				div.style.bottom = coordinate[0] + 'px';
				div.style.left = coordinate[1] + 'px';
				var imgArr = ["img/h.png","img/x.png"];
				var imgsrc = imgArr[Random(0,1)];
				img.src = imgsrc;

				// console.log(imgsrc+"图片");
				// console.log(coordinate+"坐标");

				wolf.appendChild(div);
				div.appendChild(img);
				animation(img,imgsrc);
			}


},300)

//播放动画
function animation(img,imgsrc){
    var imgplay = setInterval(function(){
		play++;
		if(play<minnum){
			img.style.left = img.offsetLeft - 216 + 'px';
		}
		if(play >=minnum){
			img.style.left = img.offsetLeft + 216 + 'px';
		}
		if(play ==maxnum){
			play=0;
			clearInterval(imgplay);
			clearWolf(img);
		}
		
	},100)

//计分
//打中大灰狼+10
//打中小灰灰-10
 img.onclick = function() {
    var score = document.getElementById('score');

    if (imgsrc=="img/h.png") {
    	score.innerHTML = parseInt(score.innerHTML) + 10;
    	time.style.width = parseInt(time.style.width) + 2 +'px';
    }else{
    	score.innerHTML = parseInt(score.innerHTML) - 10;
    	
    }
    minnum=9;
  	// img.style.left = img.offsetLeft - (minnum+3)*216 + 'px';
 }


}
//倒计时
function timeLineRun(){
    var timeLineTimer = setInterval(function(){
        time.style.width = parseInt(time.style.width) - 2 +'px';

if(time.style.width==0){
   clearInterval(mainTi);
   clearInterval(timeLineTimer);
   clearInterval(imgplay);
   gameover.style.display = block;

}
    }, 300);
}

//动画播完点击之后，清除
function clearWolf(img){
			minnum=6;
			img.parentNode.parentNode.removeChild(img.parentNode);

		}
//

//随机数
	function Random(min , max){

			//取0到9之间的随机数
			// console.log(Math.floor(Math.random()*10));
			return Math.floor(min + Math.random()*(max-min+1));

		}




