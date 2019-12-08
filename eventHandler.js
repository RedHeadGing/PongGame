var updateListeners = [];

function timer(){
    updateList
}


function update(event){
    for(let i = 0; i < updateListeners.length; i ++){
        updateListeners[i].eventPump(event);
    }
}