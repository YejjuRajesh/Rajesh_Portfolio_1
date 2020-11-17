let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 12){
        document.getElementsByClassName('yahoo');
        let gallery = document.querySelector('.balloon-gallery');
        let message = document.querySelector('.yahoo');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};