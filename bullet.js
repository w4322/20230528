class Bullet{ //odj只是一個名字
    constructor(args){ //設定基本資料或預設值(包含物件顏色、位置、速度、大小...)
     this.r = args.r || 10
     this.p = args.p || createVector(width/2,height/2) //飛彈起始位置，從中間砲台
     this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(6) //
     this.color = args.color || "red"
    }
    draw(){ //畫飛彈
        push()
        translate(this.p.x,this.p.y)
        fill(this.color)
        noStroke()
        ellipse(0,0,this.r)
        pop()

    } 

    update(){
        this.p.add(this.v)
    }
}