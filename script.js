let search = document.getElementById("search")
let task = document.getElementById("task")

document.getElementById("btn").onclick =function(){
    if(search.value.length==0){
        // alert("Enter a task ")
        document.getElementById("alert").style.visibility = 'visible';
    }
    else{
        document.getElementById("alert").style.visibility = 'hidden';
        task.innerHTML = task.innerHTML+`    
        <center><div class="tasklist"> 
            <span id="work">${search.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div></center>`  
        let alltasks = document.querySelectorAll('.del')
        for(i=0;i<alltasks.length;i++){
                alltasks[i].onclick = function(){
                    console.log(this)
                    console.log(this.parentNode)
                this.parentNode.remove()
            }
        }
        search.value=""
    }
}