const navOpen = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav__menu");
const list = document.querySelector(".nav__list");
const subbut = document.querySelector(".add__btn");

var storeditem = localStorage.getItem("storeditem");

const get = () => {
    var data = localStorage.getItem("storeditem");
//    console.log(data);
    if(data) {
        document.getElementById('formid').style.display = "none";
        document.getElementById('saved_text').innerHTML = "Didn't know you'd be back so soon..<br>Welcome Back!";
    }

};

const save = () => {
    var item = document.querySelector('.email_id').value;
    localStorage.setItem("storeditem", item);
    var re = new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9\\._+\\-]*@(?:[a-zA-Z0-9-\\.])+\\.[a-zA-Z]{2,4}$");
    
    if (item.length == 0) {
        alert('Please provide some input');
    } else if (item.length > 64 || re.test(item) == false) {
        alert('Enter valid Email Id');
    } else {
        document.getElementById('saved_text').innerHTML = "We are on a mission to get back to you soon!";
        document.getElementById('formid').style.display = "none";
    }
    

};

window.addEventListener('load', e => {
    e.preventDefault();
    e.stopImmediatePropagation();
    get();
});

subbut.addEventListener('click', e => {
    e.stopImmediatePropagation();
    save();
});


navOpen.addEventListener("click", () => {
    const listHeight = list.getBoundingClientRect().height;
    const navHeight = navContainer.getBoundingClientRect().height;

    if (navHeight === 0) {
        navContainer.style["max-height"] = `${listHeight}px`;
    } else {
        navContainer.style["max-height"] = 0;
    }
});
