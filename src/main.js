let html = document.querySelector('#html');
let style = document.querySelector("#style");


let string = `/* Hello,下面你将会欣赏到一个八卦的形成 
 * Ready
 * Go 
 **/ 
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成八卦图
 * 首先把div变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/* 八卦一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个球 */
#div1::before{
   width: 100px;
   height: 100px;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   background: #000;
   border-radius: 50%;
   background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;  
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
 }
`;
let string2 = '';
//正则表达式 可以表示所有的回车 /\n/g，但是页面会显示 '<'
//string = string.replace(/\n/g, "<br>");
let n = 0;


let step = () => {
    setTimeout(()=>{
        //如果是回车
        //如果不是回车就照搬
        //HTML中回车是<br>空格是&nbsp；
        if (string[n] === '\n'){
           string2 +='<br>'
        } else if (string[n] === ' '){
           string2 += "&nbsp;"
        } else{
           string2 += string[n];
        }
        // string2 += (string[n] === '\n' ? "<br>" : string[n]);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        //页面滚到最底部
        window.scrollTo(0,999999); 
        html.scrollTo(0,99999);  
        if(n < string.length-1){
           //如果n不是最后一个就继续
           n += 1;
           step();   
        }else{
            //n是最后一个
        }
    },50)    
};

step();



