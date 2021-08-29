
let ctx   = canvas.getContext("2d", {alpha: false});
let dirs  = {Right: [1,0], Left: [-1,0], Down: [0,1], Up: [0,-1]};
let snake = [[8,8]], apple = [4,4], dir = [0,0];
onkeydown = e => dir = dirs[e.key.slice(5)] || dir;
setInterval(() => {
snake.unshift([ snake[0][0] + dir[0] + 16 & 15 ,
				snake[0][1] + dir[1] + 16 & 15 ]);
	if("" + snake[0] == apple)
	do apple = [ Math.floor(Math.random() * 16) ,
					        Math.floor(Math.random() * 16) ];
	while(snake.some(seg => "" + seg == apple));
	else if(snake.slice(1).some(seg => "" + seg == snake[0]))
	snake.splice(1);
	else
	snake.pop();
	ctx.clearRect(0, 0, 256, 256);
	ctx.fillStyle = "red";
	ctx.fillRect(apple[0] * 16, apple[1] * 16, 16, 16);
	ctx.fillStyle = "lime";
	snake.forEach(([x,y]) => ctx.fillRect(x * 16, y * 16, 16, 16));
}, 125);