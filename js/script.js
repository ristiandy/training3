
function validateForm(){
    let name=document.forms['message-form']['nama-input'].value;
    
    if (name==""){
        document.getElementById("error-respon").innerHTML="Nama Tidak Boleh Kosong";
        return false;
    }
    document.getElementById("error-respon").innerHTML="";
    document.getElementById("name").innerHTML=name;
    return false;
}

// let name=document.getElementById("nama-input");

// document.getElementById("kirim").addEventListener("click",function(){
//     const nama=name.value;
//     if (nama==""){
//         document.getElementById("error-respon").innerHTML="Nama Tidak Boleh Kosong";
//     }else{
//         document.getElementById("error-respon").innerHTML="";
//         document.getElementById("name").innerHTML=nama;
//     }    
    
// });

let indexSlide=1;
showSlide(1);

function nextSlide(n){
    showSlide(indexSlide += n);
}

function showSlide(n){
    let listImage=document.getElementsByClassName('banner-img');
    if(n > listImage.length) {indexSlide=1;} //reset index bannernya
    
    let index = 0;
    while(index < listImage.length){
        listImage[index].style.display='none';
        index++;
    }
    
    listImage[indexSlide-1].style.display= 'block'; 
    // console.log('jumlah gambar ' + listImage.length);
    // console.log('indexSlide =' + indexSlide);
}

//setInterval(()=>nextSlide(1),3000);

document.getElementById('tombol-next').addEventListener( "click" , () => nextSlide(1));