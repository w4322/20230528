class odj{ //odj只是一個名字
    constructor(args){ //設定基本資料或預設值(包含物件顏色、位置、速度、大小...)
     //this.p = args.p || {x:random(width),y:random(height)} //物件位置
     this.p = args.p || createVector(random(width),random(height)) //物件位置
     
     //this.v = {x:random(-1,1),y:random(-1,1)} //速度，移動速度由亂數產生
     this.v = createVector(random(-1,1),random(-1,1)) //速度，移動速度由亂數產生
     
     this.size = random(5,10) // 放大倍率，大小從第一個數字到第二個數字由亂數決定
     this.stroke = random(stroke_colors)
     this.color = random(fill_colors)
    }
    draw() //把物件畫出來的函數
    {
      push() //重新設定，設定新的原點與顏色
      translate(this.p.x,this.p.y) //原點設定在物件所在位置
      scale((this.v.x<0?1:-1),-1) //放大縮小的指令。若this.v.x<0成立，則為1，否則為-1。1是不翻轉，-1是翻轉，括號前的是x軸，括號後是y軸
      fill(this.color)
      stroke(this.stroke)
      strokeWeight(3)
      beginShape()
       for(var i = 0;i<points.length;i++){
         //line(points[i][0]*this.size,points[i][1]*this.size,points[i+1][0]*this.size,points[i+1][1]*this.size)
         vertex(points[i][0]*this.size,points[i][1]*this.size)
        }
       endShape(close)
      pop()
    }
    update(){ //移動後設定位置資料為何
      //移動的程式碼
      // this.p.x = this.p.x + this.v.x //新的X軸的位置=現在的x軸位置+移動的速率
      // this.p.y = this.p.y + this.v.y
      this.p.add(this.v) //此行效果與上同
  
      //算出滑鼠位置的向量
      let mouseV = createVector(mouseX,mouseY) //把滑鼠位置轉成向量值
      //let delta = mouseV.sub(this.p).limit(3) //delta值紀錄與滑鼠方向移動的單位距離。sub是向量減法。每個物件移動速度都是三
      let delta = mouseV.sub(this.p).limit(this.v.mag()) //每個物件和原本設定的一樣
      this.p.add(delta)
  
      //碰到邊框反彈
      if(this.p.x<=0 || this.p.x>=width) //<0碰到左邊，width為碰到右邊
      {
        this.v.x = -this.v.x
      }
      if(this.p.y<=0 || this.p.y>=width) //<0碰到左邊，width為碰到右邊
      {
        this.v.y = -this.v.y
      }
    }
    isBallInRanger(x,y){ //判斷有沒有被滑鼠按到
      let d = dist(x,y,this.p.x,this.p.y) //計算滑鼠按下的點與物件的距離
      if(d<this.size*15){ //數字的由來:座標對大的值
        return true //代表距離有在範圍內
      }else{
        return false //代表距離沒有在範圍內
      }
    }
  
  }