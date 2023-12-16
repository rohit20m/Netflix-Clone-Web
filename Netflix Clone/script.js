let faqbox1 = document.querySelector('#faqbox1');
let content1 = document.querySelector('#content1');
let add1 = document.querySelector('#add1');
let cancel1 = document.querySelector('#cancel1');

let faqbox2 = document.querySelector('#faqbox2');
let content2 = document.querySelector('#content2');
let add2 = document.querySelector('#add2');
let cancel2 = document.querySelector('#cancel2');

let faqbox3 = document.querySelector('#faqbox3');
let content3 = document.querySelector('#content3');
let add3 = document.querySelector('#add3');
let cancel3 = document.querySelector('#cancel3');

let faqbox4 = document.querySelector('#faqbox4');
let content4 = document.querySelector('#content4');
let add4 = document.querySelector('#add4');
let cancel4 = document.querySelector('#cancel4');

let faqbox5 = document.querySelector('#faqbox5');
let content5 = document.querySelector('#content5');
let add5 = document.querySelector('#add5');
let cancel5 = document.querySelector('#cancel5');

let faqbox6 = document.querySelector('#faqbox6');
let content6 = document.querySelector('#content6');
let add6 = document.querySelector('#add6');
let cancel6 = document.querySelector('#cancel6');

let isContentVisible = false;

// First Content Box Function
faqbox1.onclick = () => {
    isContentVisible = !isContentVisible;

    if (isContentVisible) {
       content1.style.display = 'block'
       cancel1.style.display = 'block'
       add1.style.display = 'none'
    }
    else
    {
        content1.style.display = 'none'
        add1.style.display = 'block'
        cancel1.style.display = 'none'
    }
}

// Second Content Box Function
faqbox2.onclick = () =>{
    isContentVisible = !isContentVisible

    if(isContentVisible)
    {
        content2.style.display = 'block'
        cancel2.style.display = 'block';
        add2.style.display = 'none';
    }

    else
    {
        content2.style.display = 'none'
        add2.style.display = 'block';
        cancel2.style.display = 'none';
    }
}

// Third Content Box Function
faqbox3.onclick = () =>{
    isContentVisible = !isContentVisible
    
    if(isContentVisible)
    {
        content3.style.display = 'block'
        cancel3.style.display = 'block';
        add3.style.display = 'none';
    }

    else
    {
        content3.style.display = 'none'
        add3.style.display = 'block';
        cancel3.style.display = 'none';
    }
}

// Fourth Content Box Function
faqbox4.onclick = () =>{
    isContentVisible = !isContentVisible
    
    if(isContentVisible)
    {
        content4.style.display = 'block'
        cancel4.style.display = 'block';
        add4.style.display = 'none';
    }

    else
    {
        content4.style.display = 'none'
        add4.style.display = 'block';
        cancel4.style.display = 'none';
    }
}

// Fifth Content Box Function
faqbox5.onclick = () =>{
    isContentVisible = !isContentVisible
    
    if(isContentVisible)
    {
        content5.style.display = 'block'
        cancel5.style.display = 'block';
        add5.style.display = 'none';
    }

    else
    {
        content5.style.display = 'none'
        add5.style.display = 'block';
        cancel5.style.display = 'none';
    }
}

// Sixth Content Box Function
faqbox6.onclick = () =>{
    isContentVisible = !isContentVisible
    
    if(isContentVisible)
    {
        content6.style.display = 'block'
        cancel6.style.display = 'block';
        add6.style.display = 'none';
    }

    else
    {
        content6.style.display = 'none'
        add6.style.display = 'block';
        cancel6.style.display = 'none';
    }
}

function togglePopup(){
    document.getElementById('popUp').classList.toggle('active')
}