var modal= document.getElementById("simpleModal");
var modalBtn= document.getElementById("modalBtn");
var closeBtn= document.getElementById("closeBtn")

//Listen for click
modalBtn.addEventListener('click', openModal)
function openModal() {
    modal.style.display='block';
}
console.log(closeBtn);
closeBtn.addEventListener('click', closeModal)
function closeModal(){
    console.log('in close');
    modal.style.display='none';
}


