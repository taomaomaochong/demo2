function Bird(info) {
    this.x = info.x;
    this.y = info.y;
    this.img = info.img;

    this.canvas = info.canvas;
    this.context = info.context;

    //小鸟的速度和加速度
    this.speed = 0;
    this.aspeed = 0.0003; //加速度

    //每个小鸟的宽高
    this.w = this.img.width / 3; 
    this.h = this.img.height;

    //第一帧开始时的起始时间
    this.startTime = new Date();

    //计数器
    this.count = 0;

    //使用小鸟三个图片的第几个
    this.xindex = 0;

    //最大速度
    this.maxSpeed = 0.3;
    //最大角度 
    this.maxRadiul = 0.25*Math.PI;
}

Bird.prototype = {
    draw: function() {

        this.count += 1;
        this.xindex = this.count % 3;

        //求出旋转的弧度
        var r = this.speed / this.maxSpeed * this.maxRadiul;


        //把此时此刻的context保存
        this.context.save();
        
        //先把坐标系平移到小鸟的中心点
        this.context.translate(this.x, this.y);
        //因为小鸟有速度， 所以有一个旋转的角度
        this.context.rotate(r);

        //绘制
        this.context.drawImage(this.img, this.xindex * this.w, 0, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);
        
        //把坐标系还原
        // this.context.rotate(-r);
        // this.context.translate(-100, -y);
        this.context.restore();

        //两帧之间的时间间隔
        var now = new Date();
        var t = now - this.startTime;

        //两帧之间移动的距离
        var s = this.speed * t + this.aspeed * t * t / 2;

        //当前帧的速度
        this.speed = this.speed + this.aspeed * t;

        this.y += s;

        //当前帧的时间就变成了下一帧的起始时间
        this.startTime = now;
    }
}