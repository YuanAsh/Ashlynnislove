// function showpopup() {
//     document.getElementById.add("show-popup");
// }
// function closepopup() {
//     document.getElementById.remove("show-popup");
// }

{/* <script>
// Get the elements by thier ID
var openPopup = document.getElementById("openPopup");
var popup = document.getElementById("popup");
var closePopup = document.getElementById("close-x");

//show the popup when the openPopup is clicked
openPopup.addEventListener("click", function(event) {event.preventDefault()};
popup.style.display="block";
);

//hide the popup when the closePopup is clicked
closePopup.addEventListener("click", function() {
popup.style.display="none"
});

       
</script> */}

const openPopupButton = document.querySelectorAll('[data-popup-target]')
const closePopupButton = document.querySelectorAll('[data-popup-close]')
const overlay = document.getElementById('overlay')

openPopupButton.forEach( button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)

    })
})

closePopupButton.forEach( button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)

    })
})
function openPopup(popup) { 
    if (popup == null) return
    popup.classList.add('active')
    // overlay.classList.add('active')
}

function closePopup(popup) { 
    if (popup == null) return
    popup.classList.remove('active')
    // overlay.classList.remove('active')
}

var div= document.getElementById('FMP');
var display = 0;

function hide()
{
    if (display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }
}


var div= document.getElementById('FMP');
var display = 0;

function show()
{
    if (display == 0)
    {
        div.style.display = 'none';
        display = 1;
    }
    else
    {
        div.style.display = 'block';
        display = 0;
    }
}

var div= document.getElementById('openPopup');
var display = 0;

function show()
{
    if (display == 0)
    {
        div.style.display = 'none';
        display = 1;
    }
    else
    {
        div.style.display = 'block';
        display = 0;
    }
}

const cursor=document.querySelector('.cursor')

document.addEventListener('mousemove', e=> {
    cursor.setAttribute("style", "top:"+ (e.pageY)+"px; left:"+(e.pageX )+ "px;")
    // cursor.setAttribute("style", "top:"+ (e.pageY-10)+"px; left:"+(e.pageX-10)+ "px;")
    
})


       
