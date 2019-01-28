Get user input from the $event object
DOM events carry a payload of information.
We can make use of that payload in component.
Simply, we obtain the data such as entered in a input.

Example

// in template
<input (keyUp)="onKey($event)">
<p>{{ values }} </p>

// in class
export class KeyUpComponent{
    values='';
    onKey(event: any){
        this.values += event.target.value;
    }
}

We bind to 'keyUp' event.
Code listens keyUp event.
After each key release of user keystroke, 'keyUp' event occurs.
Angular provides 'DOM event object' in the '$event' variable.
Then passes as paramater to the component's 'onKey' method.
Then component can do with that data whatever it wants.

The 'properties' of an $event object may vary depending on the type of DOM event.
Simply they carry different data.
But, all standart DOM event objects have a 'target' property.
This target property is a 'reference' to the element that raised the event.
In this example, target refers to the '<input>' element.
So when poking properties we should be careful.