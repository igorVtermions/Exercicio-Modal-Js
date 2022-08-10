const openModal = document.querySelector('#btn')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('#closebtn')

function openModalBtn(){
    modal.style.display = 'flex';
}

openModal.addEventListener('click', openModalBtn)



function closeModalBtn(){
    modal.style.display = 'none';
}

closeModal.addEventListener('click', closeModalBtn)
