console.log("o da");

let random=document.querySelector(".gumbRandom");
let ulazi=document.querySelectorAll('input');

random.addEventListener("click",()=>{
    for(let i=0;i<18;i++){
        ulazi[i].value=Math.floor(Math.random()*10);
    }

});
let rezultat=document.querySelectorAll('.rjesenje .matrix3 .cell1');
let clear=document.querySelector(".gumbClear");
clear.addEventListener("click",()=>{
    for(let i=0;i<18;i++){
        ulazi[i].value="";
        
    }
    for(let i=0;i<9;i++){
        rezultat[i].innerText="";
    }
});

let zbroji=document.querySelector('.gumbZbroj');
let matrica1=document.querySelectorAll('.matrix1 div input');
let matrica2=document.querySelectorAll('.matrix2 div input');

zbroji.addEventListener("click",()=>{
    console.log(rezultat);
    for(let i=0;i<9;i++){
        rezultat[i].innerText=parseInt(matrica1[i].value)+parseInt(matrica2[i].value);
    }
});

let oduzmi=document.querySelector('.gumbRazlika');

oduzmi.addEventListener("click",()=>{
    for(let i=0;i<9;i++){   
        rezultat[i].innerText=parseInt(matrica1[i].value)-parseInt(matrica2[i].value);
    }
});
/*
const array=[];
for(let i=0;i<3;i++){
    for(let j=0;j<3;i++){
        for(let k=0;k<9;k++){
            array[i][j]=ulazi[k].value;
        }
        
    }
}
const array2=[];
for(let i=0;i<3;i++){
    for(let j=0;j<3;i++){
        for(let k=9;k<18;k++){
            array2[i][j]=ulazi[k].value;
        }
        
    }
}*/
let pomnozi=document.querySelector('.gumbMnozenje');
pomnozi.addEventListener("click",()=>{
    /*for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            for(let k=0;k<3;k++){
                rezultat[i].innerText=
            }
        }
    }*/
    rezultat[0].innerText=parseInt(matrica1[0].value)*parseInt(matrica2[0].value)+parseInt(matrica1[1].value)*parseInt(matrica2[3].value)+parseInt(matrica1[2].value)*parseInt(matrica2[6].value);
    
    rezultat[1].innerText=parseInt(matrica1[0].value)*parseInt(matrica2[1].value)+parseInt(matrica1[1].value)*parseInt(matrica2[4].value)+parseInt(matrica1[2].value)*parseInt(matrica2[7].value);
    
    rezultat[2].innerText=parseInt(matrica1[0].value)*parseInt(matrica2[2].value)+parseInt(matrica1[1].value)*parseInt(matrica2[5].value)+parseInt(matrica1[2].value)*parseInt(matrica2[8].value);

    rezultat[3].innerText=parseInt(matrica1[3].value)*parseInt(matrica2[0].value)+parseInt(matrica1[4].value)*parseInt(matrica2[3].value)+parseInt(matrica1[5].value)*parseInt(matrica2[6].value);

    rezultat[4].innerText=parseInt(matrica1[3].value)*parseInt(matrica2[1].value)+parseInt(matrica1[4].value)*parseInt(matrica2[4].value)+parseInt(matrica1[5].value)*parseInt(matrica2[7].value);

    rezultat[5].innerText=parseInt(matrica1[3].value)*parseInt(matrica2[2].value)+parseInt(matrica1[4].value)*parseInt(matrica2[5].value)+parseInt(matrica1[5].value)*parseInt(matrica2[8].value);

    rezultat[6].innerText=parseInt(matrica1[6].value)*parseInt(matrica2[0].value)+parseInt(matrica1[7].value)*parseInt(matrica2[3].value)+parseInt(matrica1[8].value)*parseInt(matrica2[6].value);

    rezultat[7].innerText=parseInt(matrica1[6].value)*parseInt(matrica2[1].value)+parseInt(matrica1[7].value)*parseInt(matrica2[4].value)+parseInt(matrica1[8].value)*parseInt(matrica2[7].value);

    rezultat[8].innerText=parseInt(matrica1[6].value)*parseInt(matrica2[2].value)+parseInt(matrica1[7].value)*parseInt(matrica2[5].value)+parseInt(matrica1[8].value)*parseInt(matrica2[8].value);
});