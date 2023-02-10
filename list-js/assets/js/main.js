
const addInput = document.querySelector('#add-task')

const addBtn =  document.querySelector('#add-btn')
const renameBtn = document.querySelector('.rename-task')
const updateBtn = document.querySelector('.update-task')
const delBtn = document.querySelector('.del-task')
const newTasks = document.querySelector('.new-tasks')


addBtn.addEventListener('click', (e)=> {
    let todolist = addInput.value
    todolist = todolist.trim()
    if (todolist==''){
        alert('No task is added')
    }else{
        console.log(todolist)
        addTodo(todolist)
        addInput.value = ''
        updateTodo()
    }
})



function addTodo(todolist){
    let todoTask  = `
                <div class="task">
					<input type="text" id="added-task" name='todo' disabled value="${todolist}">
                    <div>
                        <input type="button" value="✅" name='update' title='update task' class="update-task">
                        <input type="button" value="📝" name='rename' title='rename task' class="rename-task">
                        <input type="button" value="❌" name='delete' title='delete task' class="del-task">
                    </div>
                </div>
                 `
    newTasks.innerHTML += todoTask

}


function updateTodo(){
    

    let task  = document.querySelectorAll('.task')

    task.forEach((t) => {
        // console.log(t.children)
        t.addEventListener('click', e =>{

            if(e.target.classList.contains('rename-task')){
                
                console.log('rename')
                if (t.children[0].disabled){
                    t.children[0].disabled = false
                }
            }else if(e.target.classList.contains('del-task')) {
                t.remove()
            }
            
            else if (e.target.classList.contains('update-task')){
                console.log(t.children[0].disabled)
                if (t.children[0].disabled == false){
                    t.children[0].disabled = true
                }
            }
        })

    })
    
}


function removeAll(){
      document.querySelector('.new-tasks').innerHTML="";
}