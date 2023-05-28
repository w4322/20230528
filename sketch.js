let points = [[0,2],[2,3],[3,5],[2,4],[1,4],[2,4],[3,5],[3,6],[2,6],[2,7],[3,7],[3,6],[3,7],[1,7],[1,8],[0,9],[-2,10],[-5,10],[-4,9],[-5,10],[-7,10],[-8,9],[-8,7],[-7,6],[-5,6],[-7,6],[-7,4],[-6,2],[1,2],[2,2.5],[3,2.5],[4,2],[4,0],[3,0],[3,-2],[1,-2],[0,-1],[0,1],[1,1],[1,2],[3,0],[1,2],[1,1],[-6,1],[-2,1],[0,-3],[2,-5],[2,-7],[1,-8],[-1,-8],[-3,-6],[-5,-2],[-5,0],[-4,1],[-6,1],[-6,2],[-6,1],[-7,-1],[-7,-7],[-6,-8],[7,-8],[7,-4],[6,-3],[5,-3],[4,-4],[1,-4],[1,-2],[0,-1],[0,1],[1,1],[1,2]];

var stroke_colors = "cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split("-").map(a=>"#"+a)
var fill_colors = "f7d1cd-e8c2ca-d1b3c4-b392ac-735d78".split("-").map(a=>"#"+a)
// 類別



var ball //單一物件
var balls =[] //陣列，放所有物件資料
var bullet
var bullets=[]

var score = 0

function setup() { //設定這個倉庫內的資料
  createCanvas(windowWidth,windowHeight);
  for(j=0;j<30;j++) //產生幾個物件
  {
    ball = new odj({}) //產生一個新物件，暫時放到ball變數中
    balls.push(ball) //把ball物件放入balls
  }
}

function draw() { //每秒會執行60次
  background(220);
  // for(k=0;k<balls.length;k=k+1){
  //   ball = balls[k]
  //   ball.draw()
  //   ball.update()
  // }
//顯示大象的
  for(let ball of balls){
    ball.draw()
    ball.update()
    //由此判斷每個物件有沒有接觸每一個飛彈
    for(let bullet of bullets){
      if(ball.isBallInRanger(bullet.p.x,bullet.p.y))
      {
        score = score+1
        balls.splice(balls.indexOf(ball),1)
        bullets.splice(bullets.indexOf(bullet),1)
      }
    }
  }

  //顯示飛彈的
  for(let bullet of bullets){
    bullet.draw()
    bullet.update()
  }

  textSize(50)
  text(score,50,50)
  //劃出中間三角形
  push()
  let dx = mouseX-width/2  //滑鼠座標到中心座標X的距離
  let dy = mouseY-height/2  
  let angle = atan2(dy,dx)  //利用反tan算出角度

   translate(width/2,height/2)
  //  let angle = atan2(mouseY,mouseX)
  rotate(angle)  //讓三角形
   fill(0)
   triangle(50,0,-25,-25,-25,25)
   fill(225)
   ellipse(0,0,50)
   fill(200)
   ellipse(0,0,25)

   pop()
}

function mousePressed(){
//   //按下產生物件
//   // ball = new odj({
//   //   p:{x:mouseX,y:mouseY}
//   // })
//   // balls.push(ball)
// }

//按下滑鼠刪除該物件
// function mousePressed(){
//   for(let ball of balls){
//     if(ball.isBallInRanger(mouseX,mouseY)){
//       //把倉庫內物件刪除
//       score = score+1
//       balls.splice(balls.indexOf(ball),1) //把倉庫內第幾個刪除，只刪除一個。indexOf()找出
//     }
//   }

//新增一個飛彈資料(還沒有顯示)
bullet = new Bullet({})
bullets.push(bullet) //把這筆資料放到飛彈倉庫

}