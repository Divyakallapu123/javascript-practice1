const selectBox = document.querySelector('.select-box')
const selectOption = document.querySelector('.select-option')
const start = document.querySelector('#start')
const optionSearch = document.querySelector('#optionSearch')
const options = document.querySelector('.options')
const optionList = document.querySelectorAll('.options li')
const option = document.querySelector('#exampleCheck1')



selectOption.addEventListener('click',function(){
    selectBox.classList.toggle('active');
})

// optionList.forEach(function(e){
//     e.addEventListener('click',function(){
//         text = start.value;
        
        
//         selectBox.classList.remove('active');
//     })
// })




// const element = document.getElementById("todayy")

// const ulelement = document.createElement("ul")
// ulelement.setAttribute("class","list-items options")


// const pelement = document.createElement("p")
// pelement.setAttribute("class","today")


// const ielement = document.createElement("i")
// ielement.setAttribute("class","fa fa-angle-down today-icon")
// ielement.setAttribute("aria-hidden","true")
// ielement.innerHTML = "Today"

// const lielement = document.createElement("li")
// lielement.setAttribute("class","item")

// const divelement = document.createElement("div")
// divelement.setAttribute("class","form-group form-check")

// const inputelement = document.createElement("input")
// inputelement.setAttribute("type","checkbox")
// inputelement.setAttribute("class","form-check-input")
// inputelement.setAttribute("id","exampleCheck1")


// const labelelement = document.createElement("label")
// labelelement.setAttribute("class","form-check-label")
// labelelement.setAttribute("for","exampleCheck1")
// labelelement.innerHTML = "Make Wet oppointment"




// divelement.append(inputelement)
// divelement.append(labelelement)
// pelement.append(ielement)
// lielement.append(divelement)
// ulelement.append(pelement)
// ulelement.append(lielement)
// element.append(ulelement)











const inputText = document.querySelector("#start")

var arr = []
inputText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        arr.push(inputText.value)
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            // addList1(text1)
            // text1(arr[i])
        }
    }
});



// for (let i = 0; i < arr.length; i++) {
//     console.log(arr);
//     addList1(text1);
//     text1(arr[i]);
// }


const element = document.getElementById("todayy")


function addList(day,text){
const ulelement = document.createElement("ul")
ulelement.setAttribute("class","list-items options")


const pelement = document.createElement("p")
pelement.setAttribute("class","today")


const ielement = document.createElement("i")
ielement.setAttribute("class","fa fa-angle-down today-icon")
ielement.setAttribute("aria-hidden","true")
ielement.innerHTML = day

const lielement = document.createElement("li")
lielement.setAttribute("class","item")

const divelement = document.createElement("div")
divelement.setAttribute("class","form-group form-check")

const inputelement = document.createElement("input")
inputelement.setAttribute("type","checkbox")
inputelement.setAttribute("class","form-check-input")
inputelement.setAttribute("id","exampleCheck1")


const labelelement = document.createElement("label")
labelelement.setAttribute("class","form-check-label")
labelelement.setAttribute("for","exampleCheck1")
labelelement.innerHTML = text



pelement.append(ielement)
divelement.append(inputelement)
divelement.append(labelelement)
lielement.append(divelement)



ulelement.append(pelement)
ulelement.append(lielement)
element.append(ulelement)

}


addList("Today","Make Wet oppointmen")
addList("Tomorrow","Finish Layouts for new partner")
addList("day after Tomorrow","scope new extention")


// function addList1(text1){
// const pelement = document.createElement("p")
// pelement.setAttribute("class","today")


// const ielement = document.createElement("i")
// ielement.setAttribute("class","fa fa-angle-down today-icon")
// ielement.setAttribute("aria-hidden","true")
// ielement.innerHTML = day

// const lielement = document.createElement("li")
// lielement.setAttribute("class","item")

// const divelement = document.createElement("div")
// divelement.setAttribute("class","form-group form-check")

// const inputelement = document.createElement("input")
// inputelement.setAttribute("type","checkbox")
// inputelement.setAttribute("class","form-check-input")
// inputelement.setAttribute("id","exampleCheck1")


// const labelelement = document.createElement("label")
// labelelement.setAttribute("class","form-check-label")
// labelelement.setAttribute("for","exampleCheck1")
// labelelement.innerHTML = text1



// pelement.append(ielement)
// divelement.append(inputelement)
// divelement.append(labelelement)
// lielement.append(divelement)
// }
