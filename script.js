console.log("o da");

let random=document.querySelector(".gumbRandom");
let ulazi=document.querySelectorAll('input');

random.addEventListener("click",()=>{
    for(let i=0;i<18;i++){
        ulazi[i].value=Math.floor(Math.random()*10);
    }

});
let ocisti=()=>{
    for(let i=0;i<9;i++){
        rezultat[i].innerText="";
    }
}
let rezultat=document.querySelectorAll('.rjesenje .matrix3 .cell1');
let clear=document.querySelector(".gumbClear");
clear.addEventListener("click",()=>{
    for(let i=0;i<18;i++){
        ulazi[i].value="";
    }
    ocisti();
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
let pomnozi=document.querySelector('.gumbMnozenje');
pomnozi.addEventListener("click",()=>{
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

let detA=document.querySelector('.gumbDetA');
let detB=document.querySelector('.gumbDetB');
let determinantaA,determinantaB;
detA.addEventListener("click",()=>{
    ocisti();
    rezultat[1].innerText="det A";
    determinantaA=parseInt(matrica1[0].value)*parseInt(matrica1[4].value)*parseInt(matrica1[8].value)
    +parseInt(matrica1[1].value)*parseInt(matrica1[5].value)*parseInt(matrica1[6].value)
    +parseInt(matrica1[2].value)*parseInt(matrica1[3].value)*parseInt(matrica1[7].value)
    -parseInt(matrica1[2].value)*parseInt(matrica1[4].value)*parseInt(matrica1[6].value)
    -parseInt(matrica1[1].value)*parseInt(matrica1[3].value)*parseInt(matrica1[8].value)
    -parseInt(matrica1[0].value)*parseInt(matrica1[5].value)*parseInt(matrica1[7].value);
    rezultat[4].innerText=determinantaA;
});
detB.addEventListener("click",()=>{
    ocisti();
    rezultat[1].innerText="det B";
    determinantaB=parseInt(matrica2[0].value)*parseInt(matrica2[4].value)*parseInt(matrica2[8].value)
    +parseInt(matrica2[1].value)*parseInt(matrica2[5].value)*parseInt(matrica2[6].value)
    +parseInt(matrica2[2].value)*parseInt(matrica2[3].value)*parseInt(matrica2[7].value)
    -parseInt(matrica2[2].value)*parseInt(matrica2[4].value)*parseInt(matrica2[6].value)
    -parseInt(matrica2[1].value)*parseInt(matrica2[3].value)*parseInt(matrica2[8].value)
    -parseInt(matrica2[0].value)*parseInt(matrica2[5].value)*parseInt(matrica2[7].value);
    rezultat[4].innerText=determinantaB;
});

let skalarnoA=document.querySelector('.gumbScalarA');
let skalarnoB=document.querySelector('.gumbScalarB');
let broj=document.querySelector('.skalarA');
let broj2=document.querySelector('.skalarB');
broj.value="0";
broj2.value="0";
skalarnoA.addEventListener("click",()=>{
    ocisti();
    for(let i=0;i<9;i++){
        rezultat[i].innerText=parseInt(broj.value)*parseInt(matrica1[i].value);
    }
});
skalarnoB.addEventListener("click",()=>{
    ocisti();
    for(let i=0;i<9;i++){
        rezultat[i].innerText=parseInt(broj2.value)*parseInt(matrica2[i].value);
    }
});

let transponirajA=document.querySelector('.gumbTransA');
let transponirajB=document.querySelector('.gumbTransB');
transponirajA.addEventListener("click",()=>{
    ocisti();
    rezultat[0].innerText=parseInt(matrica1[0].value);
    rezultat[1].innerText=parseInt(matrica1[3].value);
    rezultat[2].innerText=parseInt(matrica1[6].value);
    rezultat[3].innerText=parseInt(matrica1[1].value);
    rezultat[4].innerText=parseInt(matrica1[4].value);
    rezultat[5].innerText=parseInt(matrica1[7].value);
    rezultat[6].innerText=parseInt(matrica1[2].value);
    rezultat[7].innerText=parseInt(matrica1[5].value);
    rezultat[8].innerText=parseInt(matrica1[8].value);
});
transponirajB.addEventListener("click",()=>{
    ocisti();
    rezultat[0].innerText=parseInt(matrica2[0].value);
    rezultat[1].innerText=parseInt(matrica2[3].value);
    rezultat[2].innerText=parseInt(matrica2[6].value);
    rezultat[3].innerText=parseInt(matrica2[1].value);
    rezultat[4].innerText=parseInt(matrica2[4].value);
    rezultat[5].innerText=parseInt(matrica2[7].value);
    rezultat[6].innerText=parseInt(matrica2[2].value);
    rezultat[7].innerText=parseInt(matrica2[5].value);
    rezultat[8].innerText=parseInt(matrica2[8].value);
});

let inverzA=document.querySelector('.gumbInverseA');
let inverzB=document.querySelector('.gumbInverseB');
function de(m)
    {
        let m16 = m[0] * m[3];
        let m18 = m[1] * m[2];
        return m16 - m18;
    }
    const m1=new Array(4);
    const m2=new Array(4);
    const m3=new Array(4);
    const m4=new Array(4);
    const m5=new Array(4);
    const m6=new Array(4);
    const m7=new Array(4);
    const m8=new Array(4);
    const m9=new Array(4);

inverzA.addEventListener("click",()=>{

    m1[0]=parseInt(matrica1[4].value);
    m1[1]=parseInt(matrica1[5].value);
    m1[2]=parseInt(matrica1[7].value);
    m1[3]=parseInt(matrica1[8].value);
    
    m2[0]=parseInt(matrica1[3].value);
    m2[1]=parseInt(matrica1[5].value);
    m2[2]=parseInt(matrica1[6].value);
    m2[3]=parseInt(matrica1[8].value);

    m3[0]=parseInt(matrica1[3].value);
    m3[1]=parseInt(matrica1[4].value);
    m3[2]=parseInt(matrica1[6].value);
    m3[3]=parseInt(matrica1[7].value);

    m4[0]=parseInt(matrica1[1].value);
    m4[1]=parseInt(matrica1[2].value);
    m4[2]=parseInt(matrica1[7].value);
    m4[3]=parseInt(matrica1[8].value);

    m5[0]=parseInt(matrica1[0].value);
    m5[1]=parseInt(matrica1[2].value);
    m5[2]=parseInt(matrica1[6].value);
    m5[3]=parseInt(matrica1[8].value);

    m6[0]=parseInt(matrica1[0].value);
    m6[1]=parseInt(matrica1[1].value);
    m6[2]=parseInt(matrica1[6].value);
    m6[3]=parseInt(matrica1[7].value);

    m7[0]=parseInt(matrica1[1].value);
    m7[1]=parseInt(matrica1[2].value);
    m7[2]=parseInt(matrica1[4].value);
    m7[3]=parseInt(matrica1[5].value);

    m8[0]=parseInt(matrica1[0].value);
    m8[1]=parseInt(matrica1[2].value);
    m8[2]=parseInt(matrica1[3].value);
    m8[3]=parseInt(matrica1[5].value);

    m9[0]=parseInt(matrica1[0].value);
    m9[1]=parseInt(matrica1[1].value);
    m9[2]=parseInt(matrica1[3].value);
    m9[3]=parseInt(matrica1[4].value);

    const matricaX=new Array(9);
    matricaX[0]=de(m1);
    matricaX[3]=-1*de(m2);
    matricaX[6]=de(m3);
    matricaX[1]=-1*de(m4);
    matricaX[4]=de(m5);
    matricaX[7]=-1*de(m6);
    matricaX[2]=de(m7);
    matricaX[5]=-1*de(m8);
    matricaX[8]=de(m9);
    
    if(determinantaA===0){
        ;
    }
    else{
        let c=1/determinantaA;
        for(let i=0;i<9;i++){
            rezultat[i].style="font-size:50;";
            let a=c*parseInt(matricaX[i]);
            rezultat[i].innerText=a.toFixed(2);
        }
    }
});

inverzB.addEventListener("click",()=>{
    m1[0]=parseInt(matrica2[4].value);
    m1[1]=parseInt(matrica2[5].value);
    m1[2]=parseInt(matrica2[7].value);
    m1[3]=parseInt(matrica2[8].value);
    
    m2[0]=parseInt(matrica2[3].value);
    m2[1]=parseInt(matrica2[5].value);
    m2[2]=parseInt(matrica2[6].value);
    m2[3]=parseInt(matrica2[8].value);

    m3[0]=parseInt(matrica2[3].value);
    m3[1]=parseInt(matrica2[4].value);
    m3[2]=parseInt(matrica2[6].value);
    m3[3]=parseInt(matrica2[7].value);

    m4[0]=parseInt(matrica2[1].value);
    m4[1]=parseInt(matrica2[2].value);
    m4[2]=parseInt(matrica2[7].value);
    m4[3]=parseInt(matrica2[8].value);

    m5[0]=parseInt(matrica2[0].value);
    m5[1]=parseInt(matrica2[2].value);
    m5[2]=parseInt(matrica2[6].value);
    m5[3]=parseInt(matrica2[8].value);

    m6[0]=parseInt(matrica2[0].value);
    m6[1]=parseInt(matrica2[1].value);
    m6[2]=parseInt(matrica2[6].value);
    m6[3]=parseInt(matrica2[7].value);

    m7[0]=parseInt(matrica2[1].value);
    m7[1]=parseInt(matrica2[2].value);
    m7[2]=parseInt(matrica2[4].value);
    m7[3]=parseInt(matrica2[5].value);

    m8[0]=parseInt(matrica2[0].value);
    m8[1]=parseInt(matrica2[2].value);
    m8[2]=parseInt(matrica2[3].value);
    m8[3]=parseInt(matrica2[5].value);

    m9[0]=parseInt(matrica2[0].value);
    m9[1]=parseInt(matrica2[1].value);
    m9[2]=parseInt(matrica2[3].value);
    m9[3]=parseInt(matrica2[4].value);

    const matricaX=new Array(9);
    matricaX[0]=de(m1);
    matricaX[3]=-1*de(m2);
    matricaX[6]=de(m3);
    matricaX[1]=-1*de(m4);
    matricaX[4]=de(m5);
    matricaX[7]=-1*de(m6);
    matricaX[2]=de(m7);
    matricaX[5]=-1*de(m8);
    matricaX[8]=de(m9);
    
    if(determinantaB===0){
        ;
    }
    else{
        let c=1/determinantaB;
        for(let i=0;i<9;i++){
            rezultat[i].style="font-size:50;";
            let a=c*parseInt(matricaX[i]);
            rezultat[i].innerText=a.toFixed(2);
        }
    }
});
