//info: {x: 0, img:, canvas: , context: , speed}
function Land (info) {
    this.y = info.y;
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.img = info.img;
    this.speed = info.speed;
}

Land.prototype = {
    draw: function() {
        //天空对象在向左移动
        this.x -= this.speed;
        //如果移出舞台， 就排到队伍的后面
        if (this.x <= -this.img.width) {
            this.x = this.img.width*3;
        }

        //绘制
        this.context.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);

        this.context.rect(this.x, this.y, this.img.width, this.img.height);
    }
}

