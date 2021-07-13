let add_btn=document.querySelector('#add_btn');
//add_btn.disabled=true;
let select_btn=document.querySelector('#select_btn');
let incomes=document.querySelector('.incomes');
let expenses=document.querySelector('.expenses');
let desc=document.querySelector('#desc');
let amt=document.querySelector('#amt');
let tot_inc_col=document.querySelector('#tot_inc');
let tot_exp_col=document.querySelector('#tot_exp');
let money_col=document.querySelector('#money');
let h2s=document.querySelectorAll('h2');
h2s[0].style.color='green';
h2s[1].style.color='blue';
h2s[2].style.color='red';

let tot_inc=0,tot_exp=0,money=0;

function value_design(obj,bg_clr,clr,b_rad,pad)
{
    obj.style.backgroundColor=bg_clr;
    obj.style.color=clr;
    obj.style.borderRadius=b_rad;
    obj.style.padding= pad;
    return obj;
}
function btn_design(obj,clr)
{
    obj.style.backgroundColor='white';
    obj.style.height='29px';
    obj.style.display="inline";
    obj.innerText='X';
    obj.style.border='white';
    obj.style.borderRadius='3cm';
    obj.style.color=clr;
    return obj;
}

add_btn.addEventListener('click',function()
{
    let x=select_btn.value;
    if(desc.value==="" || amt.value==="")
    alert('Incomplete fields. Kindly fill in description and amount');
    else
    {
        if(x==='inc')
        {
        let new_inc=document.createElement('h4');
        new_inc.innerText=`${desc.value}(${amt.value})`;

        let btn=document.createElement('button');
        new_inc.style.display="inline";
        new_inc.insertAdjacentElement("beforeend",btn);
        
        btn=btn_design(btn,'green');
        new_inc=value_design(new_inc,'green','white','10px','4px 0 4px 0');

        btn.addEventListener('click',function(ev){
            let y=btn.parentElement.innerText;
            //console.log(y.splice(1,3));
            let st=y.indexOf('(');
            let fi=y.indexOf(')');
            let ret=y.slice(st+1,fi);
            console.log(ret);
            tot_inc-=parseInt(ret);
            new_inc.remove();
            tot_inc_col.innerText=tot_inc;
            money=tot_inc-tot_exp;
        money_col.innerText=money;
        })
        incomes.appendChild(new_inc);
        tot_inc+=parseInt(amt.value);
        tot_inc_col.innerText=tot_inc;
        }
        else if(x==='exp'&& desc.value!=="")
        {
        let new_exp=document.createElement('h4');
        new_exp.innerText=`${desc.value}(${amt.value})`;

        let btn=document.createElement('button');
        btn.style.display="inline";
        
        btn=btn_design(btn,'red');
        new_exp.style.display="inline";
        new_exp.insertAdjacentElement("beforeend",btn);

       
        new_exp=value_design(new_exp,'red','white','10px','4px 0 4px 0');

        btn.addEventListener('click',function(ev){
            let y=btn.parentElement.innerText;
            //console.log(y.splice(1,3));
            let st=y.indexOf('(');
            let fi=y.indexOf(')');
            let ret=y.slice(st+1,fi);
            console.log(ret);
            tot_exp-=parseInt(ret);
            new_exp.remove();
            tot_exp_col.innerText=tot_exp;
            money=tot_inc-tot_exp;
        money_col.innerText=money;
        })
        expenses.appendChild(new_exp);
        tot_exp+=parseInt(amt.value);
        tot_exp_col.innerText=tot_exp;
        }
    money=tot_inc-tot_exp;
    money_col.innerText=money;
}
})