const addInput = document.querySelector('#add')
const addBtn  = document.querySelector('#add-btn')
const addInput1 = document.querySelector('#add1')
const addbtn1 = document.querySelector('#add-btn1')
const deteleIndex = document.querySelector('#index')
const index11 = document.querySelector('#index11')
const text11 = document.querySelector('#text11')
const index12 = document.querySelector('#index12')
const text12 = document.querySelector('#text12')

var arr = []
addBtn.addEventListener('click',(e)=>{
    arr.push(addInput.value)
    alert('Added');
})

function showbtn(){
    console.log(arr);
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function popbtn(){
    arr.pop()
    console.log(arr);
}

var arr1 = []
addbtn1.addEventListener('click',(e)=>{
    arr.push(addInput1.value)
    alert('Added');
})

function showbtn1(){
    console.log(arr1);
    for (let i=0; i<arr1.length ; i++){
        console.log(arr1[i])

    }
}

function popbtn1(){
    arr.pop()
    console.log(arr);
}

function concat() {
    let result = arr.concat(arr1)
    console.log(result);
}

function deletebtn() {
    var index = Number(deteleIndex.value)
     
    if (index > arr.length) {
        alert("error");
        return
    }
    else if (index < 0) {
        alert("error");
        return
    }




    console.log(arr.splice(index,1));
    console.log(arr);
    console.log(index);
}

function update() {
    var index1 = Number(index11.value)
    var text = text11.value
     
    if (index1 > arr.length) {
        alert("error");
        return
    }
    else if (index1 < 0) {
        alert("error");
        return
    }


    console.log(arr.splice(index1 , 1 , text));
    console.log(arr);
    console.log(index1);
    console.log(text);
}

function insert111() {
    var index13 = Number(index12.value)
    var text13 = text12.value

    if (index13 > arr.length) {
        alert("error");
        return
    }
    else if (index13 < 0) {
        alert("error");
        return
    }



    console.log(arr.splice(index13 , 0 , text13));
    console.log(arr);
    console.log(index13);
    console.log(text13);
}



function repeat() {
 let counts = {}

 for(let i =0; i < arr.length; i++){ 
     if (counts[arr[i]]){
     counts[arr[i]] += 1
     } else {
     counts[arr[i]] = 1
     }
    }  
    for (let j in counts){
        if (counts[j] >= 2){
            console.log(j + " counted: " + counts[j] + " times.")
        }
    }
  console.log(counts)
}

repeat(arr)


    function dupli(){
        let uniqueChars = [...new Set(arr)];
    
        console.log(uniqueChars);
	}