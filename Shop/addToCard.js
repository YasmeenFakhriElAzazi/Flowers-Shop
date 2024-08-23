/*<td>
        <div class="quantity">
            <div class="minus"></div>
            <div class="counter"></div>
            <div class="plus"></div>
        </div>
</td>*/


let minus = [...document.querySelectorAll('.minus') ]
let plus = [...document.querySelectorAll('.plus') ]
let counter = [...document.querySelectorAll('.counter') ]
let price = [...document.querySelectorAll('.product-price') ]
let total = [...document.querySelectorAll('.product-total') ]

console.log();

for (let i = 0; i < 4; i++) {
    let count = 0 ;

    minus[i].addEventListener('click' , ()=>{
        if(count == 0){
            count  = 0
        }else{
            count-- ;
        }
        counter[i].textContent = count
        let p = Number(price[i].textContent.slice(1)) ;
        let t = Number(total[i].textContent.slice(1)) ;
        total[i].textContent = `$ ${p * count}` ;
    
    })
    plus[i].addEventListener('click' , ()=>{
       
            count++ ;
        
        counter[i].textContent = count;
        let p = Number(price[i].textContent.slice(1)) ;
        let t = Number(total[i].textContent.slice(1)) ;
        total[i].textContent = `$ ${p * count}` ;
    
    })
    
}
