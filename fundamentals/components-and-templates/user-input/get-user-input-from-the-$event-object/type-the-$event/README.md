Type the $event

In the previous example, we cast the $event to an 'any' type. (onKey(event: any))
Meaning that we did not specify clearly what the type of $event object.
But we know that we should be.
So will make the $event object type of relevant class.

// in class
export class KeyUpComponent{
    values='';
    onKey(event: KeyboardEvent){
        this.values += (<HTMLInputElement>event.target).value;
    }
}

The $event is now a 'KeyboardEvent' type.

We said that not all elements have a 'value' property.
As an extra, we cast the 'target' to an input element.