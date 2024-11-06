
function setup(){
  createCanvas(1000, 1000);
  dayOfWeek(2024,11,6)
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  rect(0,0,700,100)
  textSize(30)
  text(m+"月",300,50)
  for(let b =0;b <7 ; b++){
    for(let c =0; c < 6 ; c++){
      if(1<=b && b<=5){
      fill(165)
      rect(b*100,100,100,50)
      rect(b*100,150+c*100,100)
      }
     if(b==0){
      fill(255,0,0)
      rect(b*100,100,100,50)
      fill(255,100,100)
      rect(b*100,150+c*100,100)
     }
     if(b==6){
      fill(0,255,0)
      rect(b*100,100,100,50)
      fill(100,255,255)
      rect(b*100,150+c*100,100)
     } 
    }
  } 
  let p = 0
  for(let d = 1; d <= daysInMonth(y, m); d++){
   let dow = dayOfWeek(y, m, d);
   if(dow==0){
     p=p+1
   }
   fill(100,4,100)
   text(d,5+dow*100,224+100*p)
   fill(255)
   text(dayOfWeekAsString(dow),30+dow*100,136)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  for (let　y  = 2003; y <= 2024;　y++){
    if(isLeapYear(y)){
      return 366
    }
    else{
      return 365
    }
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  let x =1
  x += dayOfYear(y,m,d)
  x -= dayOfYear(1970,1,1)
  return (x%7)
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
