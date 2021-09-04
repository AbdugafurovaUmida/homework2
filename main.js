let array = document.getElementsByTagName('img');

function accounts(){
  let i = 1;
  setInterval(()=>{
    if(i == array.length){
       i = 0;
       for(el of array){
         el.style.opacity ='0';
       }
    }
    array[i].style.opacity= '1';
    i++;
  },10000);

}

accounts()
let names = document.getElementsByTagName('h3')
function profiles(){
    let j = 1;
    setInterval(()=>{
        if(j == names.length){
            j = 0;
            for(el of names){
                el.style.opacity='0';
            }
        }
        names[j].style.opacity= '1';
       j++;
    },10000)
  
  }
  
profiles()
let symbol = document.getElementsByTagName('a')
function activity(){
    let c = 1 ;
    setInterval(()=>{
        if(c == symbol.length){
            c = 0 ;
            for(el of symbol){
                el.style.opacity = '0';
            }
        }
        symbol[c].style.opacity = '1';
        c++;
    },10000)
}

activity()



