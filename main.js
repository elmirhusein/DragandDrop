var p=document.getElementsByTagName('p');
var choice=document.getElementsByClassName('choice');
var dragItem=null;


for(var i of p){
    i.addEventListener('dragstart',dragStart);
    i.addEventListener('dragend',dragEnd);
}

function dragStart(){
    dragItem=this;
    setTimeout(()=>this.style.display="none",0);
}
function dragEnd(){
    setTimeout(()=>this.style.display="block",0);
    dragItem=null;
}
for(value of choice){
    value.addEventListener('dragover',dragOver);
    value.addEventListener('dragenter',dragEnter);
    value.addEventListener('dragleave',dragLeave);
    value.addEventListener('drop',Drop);
}
function Drop(){    
    this.append(dragItem);
}
function dragOver(e){    
    e.preventDefault();
    this.style.border="4px dotted cyan";
}
function dragEnter(e){    
    e.preventDefault();
}
function dragLeave(){    
    this.style.border="none";
}
