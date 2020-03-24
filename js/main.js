let burger = document.querySelector('.burger i');
let navi = document.querySelector('.navi');
let li = document.querySelectorAll('.navi li');
let article = document.querySelectorAll('.text');
let home = document.querySelector('.home');
let facts = document.querySelectorAll('.facts li');
let characters = document.querySelector('.characters');


document.addEventListener('DOMContentLoaded',show_div);
function show_div(){
  home.style.display='block';

}



burger.addEventListener('click',function(){ 
if(navi.style.visibility =='visible'){
  navi.style.visibility ='hidden';
  navi.style.opacity ='0';
  navi.style.transition ="0.5s";
}
else{
  navi.style.visibility ='visible'; 
  navi.style.opacity ='1'; 
  navi.style.transition ="0.5s";    
}  
})

burger.addEventListener('mouseenter',function(){   
  navi.style.visibility ='visible'; 
  navi.style.opacity ='1'; 
  navi.style.transition ="0.5s"; 
  burger.style.cursor='pointer';   
})



for(let i=0; i<li.length;i++){
  li[i].addEventListener("click",function(){
      for(let a=0;a<article.length;a++){
          article[a].style.display="none";        
          li[a].style.color='#cf161a';  
         
      }
      article[i].style.display="block";
      li[i].style.color='red';   
  })
}

for(let i=0 ; i<li.length;i++){
  li[i].addEventListener('mouseenter',function(){
      li[i].style.cursor='pointer';
  })
}


for(let i=0;i<facts.length;i++){
  facts[i].addEventListener("mouseenter",function(){
          facts[i].classList.add('style-2');
          
  });

  facts[i].addEventListener("mouseleave",function(){
      facts[i].classList.remove('style-2');
      facts[i].classList.add('style-1');
  });
}



document.addEventListener('DOMContentLoaded',siteJS);
async function siteJS(){
    let url = ("https://futuramaapi.herokuapp.com/api/quotes");
    let promise = await fetch(url);
    let info = await promise.json();
    console.log(info); 
    
   
    for(let i = 0; i<info.length ;i++){ 
      let div = document.createElement('div');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p'); 

      h2.textContent=info[i].character;
      img.setAttribute('src',info[i].image);    
      div.setAttribute('class','persons')
      p.textContent=info[i].quote;

      div.insertAdjacentElement('beforeend',h2);
      div.insertAdjacentElement('beforeend',img);
      div.insertAdjacentElement('beforeend',p);
      characters.insertAdjacentElement('beforeend',div);    

    
      div.style.margin='30px auto';
      div.style.textAlign='center';
      div.style.height='600px';
      div.style.display='none';

      img.style.height='400px';
      img.style.width='320px';

     
      h2.style.textAlign='center';
      h2.style.fontSize='55px';
      p.style.textAlign='center';
      p.style.fontSize='35px';

      
    }



    let left = document.createElement('img');
    left.setAttribute('id','left');
    let right = document.createElement('img');
    right.setAttribute('id','right');
    left.setAttribute('src','img/left.png');
    right.setAttribute('src','img/right.png');


    left.addEventListener('click',function(){
      left.style.opacity='1';
      left.style.transition='0.5s';
      left.style.cursor='pointer';
    })
    left.addEventListener('mouseleave',function(){
      left.style.opacity='0.5';
      left.style.transition='0.5s';
      left.style.cursor='pointer';
    })
    left.addEventListener('mouseenter',function(){
      left.style.opacity='1';
      left.style.transition='0.5s';
      left.style.cursor='pointer';
    })


    right.addEventListener('click',function(){
      right.style.opacity='1';
      right.style.transition='0.5s';
      right.style.cursor='pointer';
    })
    right.addEventListener('mouseleave',function(){
      right.style.opacity='0.5';
      right.style.transition='0.5s';
      right.style.cursor='pointer';
    })
    right.addEventListener('mouseenter',function(){
      right.style.opacity='1';
      right.style.transition='0.5s';
      right.style.cursor='pointer';
    })

    characters.insertAdjacentElement('beforeend',left)
    characters.insertAdjacentElement('beforeend',right)

    let count_div = document.querySelectorAll('.persons');
    count_div[0].style.display = 'block';
    let index = 0 ;  



    right.addEventListener('click',  function nextImg(){
      
      for(let i = 0 ; i<count_div.length;i++){
       count_div[i].style.display = 'none';
      }     
      index++;
      if (index>=count_div.length){
        index=0
      }
      count_div[index].style.display='block';    
        })
    

    left.addEventListener('click',  function prevImg(){
       
      for(let i = 0 ; i<count_div.length;i++){
       count_div[i].style.display = 'none';
      }
      index--;  
      if (index<0){
        index=count_div.length-1;
      }        
       count_div[index].style.display='block';      
       
       })      
       
}

let baby = document.querySelector('.baby');
baby.addEventListener('mouseenter',function(){
  let hey =document.createElement('div');
  let p=document.createElement('p');
  hey.insertAdjacentElement('beforeend',p);
  p.insertAdjacentText('beforeend','You can see more in Facts');
  let body=document.querySelector('body');
  body.insertAdjacentElement('beforeend',hey)  ;
  
  hey.style.height='100px';
  hey.style.width='200px';
  hey.style.backgroundColor='rgb(255,255,255,0.5)';
  hey.style.border='solid 1px brown';
  hey.style.borderRadius='30%';
  hey.style.position='absolute';
  hey.style.bottom='350px';
  hey.style.right='100px';
  hey.style.textAlign='center'; 
  p.style.marginTop='40px';
  p.style.fontSize='15px';
  p.style.color='brown';
  p.style.fontWeight='bold';

   
  let baby = document.querySelector('.baby');
  baby.addEventListener('mouseleave',function(){
  hey.style.visibility='hidden';
  hey.style.transition='10s'
})

})


let rocket=document.querySelector('.rocket');
rocket.addEventListener('mouseenter',function(){
  let hey =document.createElement('div');
  let p=document.createElement('p');
  hey.insertAdjacentElement('beforeend',p);
  p.insertAdjacentText('beforeend','We crashed on an uncharted planet.');
  let body=document.querySelector('body');
  body.insertAdjacentElement('beforeend',hey);

  hey.style.height='100px';
  hey.style.width='200px';
  hey.style.backgroundColor='rgb(255,255,255,0.5)';
  hey.style.border='solid 1px brown';
  hey.style.borderRadius='30%';
  hey.style.position='absolute';
  hey.style.bottom='370px';
  hey.style.left='100px';
  hey.style.textAlign='center'; 
  p.style.marginTop='30px';
  p.style.fontSize='15px';
  p.style.color='brown';
  p.style.fontWeight='bold';

   
  let rocket = document.querySelector('.rocket');
  rocket.addEventListener('mouseleave',function(){
  hey.style.visibility='hidden';
  hey.style.transition='5s'
})

})




