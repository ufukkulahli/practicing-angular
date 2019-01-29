Key event filtering (with key.enter)

Let's say we want to know when the user smashed the 'enter' key on input.
We can simply bind to Angular's 'keyup.enter' 'pseudo-event'.
Angular calls event handler, then we would know that enter key is pressed.

// in html
<input #box (keyup.enter)="onEnter(box.value)">

// in class
onEnter(value: string){
    this.value = value;
}

We can take actions with the help of specific key bindings against user's actions.