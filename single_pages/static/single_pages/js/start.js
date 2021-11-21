const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const qna0 = document.querySelector("#qna0");
const result = document.querySelector("#result");

const endPoint = 7;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
//  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL=''

  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
//  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
//  resultDesc.innerHTML = infoList[point].desc;
if(point==0){
  document.getElementById("checkResult").href = "/군산/";
  }
  if(point==0){
  document.getElementById("checkResult").href = "/제주/";
  }
else if(point==1){
  document.getElementById("checkResult").href = "/통영/"
}
else if(point==2){
  document.getElementById("checkResult").href = "/여수/"
}
else if(point==3){
  document.getElementById("checkResult").href = "/거제/"
}
else if(point==4){
  document.getElementById("checkResult").href = "/군산/"
}
else if(point==5){
  document.getElementById("checkResult").href = "/인천/"
}
else if(point==6){
  document.getElementById("checkResult").href = "/속초/"
}
else if(point==7){
  document.getElementById("checkResult").href = "/포항/"
}
else if(point==8){
  document.getElementById("checkResult").href = "/강릉/"
}
else if(point==9){
  document.getElementById("checkResult").href = "/서울/"
}
else if(point==10){
  document.getElementById("checkResult").href = "/가평/"
}
else if(point==11){
  document.getElementById("checkResult").href = "/전주/"
}
else if(point==12){
  document.getElementById("checkResult").href = "/경주/"
}
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(imgname, answerText, qIdx, idx, num){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  var div1 = document.createElement('div');
  var div2 = document.createElement("div");
  var imgDiv  = document.createElement('div');
  var img = document.createElement('img');

  imgDiv .classList.add('imgdiv');
  imgDiv .style.width = "80%";
  imgDiv .style.margin = "0 auto";
  img.style.width="100%";
  a.style.display = "flex";

  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  div1.classList.add('div1');
  div2.classList.add('div2');

  if(idx == 0){
    a.appendChild(div1);
    a.appendChild(div2);
  }

  var d1 = document.querySelector('.div1');
  var d2 = document.querySelector('.div2');

  if(idx%2 == 0){
    d1.appendChild(answer);
    d1.appendChild(imgDiv);
    imgDiv.appendChild(img);
  }else {
    d2.appendChild(answer)
    d2.appendChild(imgDiv)
    imgDiv.appendChild(img);
  }

  answer.innerHTML = answerText;
    if(imgname==""){
    imgname="basic.jpg"
  }
  img.src="/static/single_pages/images/" + imgname;


  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    var divChild = document.querySelectorAll('.imgdiv');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      divChild[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      divChild[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
      divChild[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[num][qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
        divChild[i].style.display = 'none';
      }
      goNext(++qIdx, num);
    },450)
  }, false);
}

function goNext(qIdx, num){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[num][qIdx].q;
  for(let i in qnaList[num][qIdx].a){
    addAnswer(qnaList[num][qIdx].a[i].img,  qnaList[num][qIdx].a[i].answer, qIdx, i,num);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}



function begin(num){
  qna0.style.WebkitAnimation = "fadeOut 1s";
  qna0.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna0.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx,num);
  }, 450);
}

function go(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna0.style.WebkitAnimation = "fadeIn 1s";
    qna0.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna0.style.display = "block"
    }, 450)

  var a = document.querySelector('.answerBox0');
  var q = document.querySelector('.qBox0');

  q.innerHTML = qnaList0[0].q;
  for(let i = 0; i < qnaList0[0].a.length; i++){
    var answer = document.createElement('button');
    var imgDiv  = document.createElement('div');
    var img = document.createElement('img');
    imgDiv.classList.add('imgdiv');
    imgDiv.style.width = "80%";
    imgDiv.style.margin = "0 auto";
    img.style.width="100%";
    a.style.display = "flex";

    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    a.appendChild(imgDiv);
    imgDiv.appendChild(img);

    img.src="/static/single_pages/images/" + qnaList0[0].a[i].img;
    answer.innerHTML = qnaList0[0].a[i].answer;

    answer.addEventListener("click", function(){
      begin(i);
    })
  }
  }, 450);
}