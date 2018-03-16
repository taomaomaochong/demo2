//info: {x: 0, img:, canvas: , context: , speed}
function Sky (info) {
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.img = info.img;
    this.speed = info.speed;
}

Sky.prototype = {
    draw: function() {
        // console.log("绘制");
        //天空对象在向左移动
        this.x -= this.speed;
        //如果移出舞台， 就排到队伍的后面
        if (this.x <= -this.canvas.width) {
            this.x = this.canvas.width;
        }

        //绘制
        this.context.drawImage(this.img, this.x, 0, this.img.width, this.img.height);
    }
}

