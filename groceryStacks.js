function groceryStacks(){
    let groceryStack = [];
    function peek() {
        if (groceryStack.length === 0) {
            alert("The stack is currently empty.");
            return true; 
        } else {
            alert(`Top of the stack: ${groceryStack[groceryStack.length - 1]}`);
            return false; 
        }
    }
    function push(item) {
        groceryStack.push(item);
        alert(`Pushed "${item}" to the stack.`);
        printStack();
    }
    
    function pop() {
        if (groceryStack.length === 0) {
            alert("The stack is empty. Nothing to pop.");
        } else {
            let removedItem = groceryStack.pop();
            alert(`Popped "${removedItem}" from the stack.`);
        }
        printStack();
    }
    
    function printStack() {
        alert(`Current Stack: [${groceryStack.join(", ")}]`);
    }
    
    alert("Enter 5 grocery items to push onto the stack.");
    
    for (let i = 0; i < 5; i++) {
        let item = prompt(`Enter grocery item ${i + 1}:`);
        push(item);
    }
    
    alert("\nPerforming stack operations:");
    peek(); 
    pop();   
    peek();  
    
}