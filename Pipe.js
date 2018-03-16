//info: {x: 0, img:, canvas: , context: , speed}
function Pipe (info) {
    this.x = info.x;
    //下面的管道距离画布的最底部的高度
    this.bottom = info.bottom;
    this.canvas = info.canvas;
    this.context = info.context;
    //管道的上下两部分的图片
    this.topImg = info.topImg;
    this.bottomImg = info.bottomImg;
    //水平方向管道和管道之间的间隔
    this.gap = info.gap;
    //上下管道之间的间隔
    this.offset = info.offset;

    //上下两截管道的高度
    this.topHeight = 0;
    this.bottomHeight = 0;

    //计算上下管道的高度
    this.initHeight();

    this.speed = info.speed;
}

Pipe.prototype = {
    draw: function() {
        this.x -= this.speed;
        //当管道移到画布的外面时， 跟到队伍的后面去
        if (this.x <= -this.topImg.width) {
            //重新给柱子的高度赋值
            this.initHeight();
            this.x = this.topImg.width * 5 + this.gap * 6;
        }

        // console.log("hha");

        // console.log(this.topImg);

        //绘掉管道
        this.context.drawImage(this.topImg, this.x, 0, this.topImg.width, this.topHeight);

        this.context.drawImage(this.bottomImg, this.x, this.topHeight + this.offset, this.topImg.width, this.bottomHeight);

        this.context.rect(this.x, 0, this.topImg.width, this.topHeight);
        this.context.rect(this.x, this.topHeight + this.offset, this.topImg.width, this.bottomHeight);
    },

    initHeight: function() {
        //上半截管道的高度
        this.topHeight = 150 + Math.random() * 100; //得到一个150 到250的一个随机数

        //计算出下半截的管道的高度
        this.bottomHeight = this.canvas.height - this.bottom - this.topHeight - this.offset;
    }
}

