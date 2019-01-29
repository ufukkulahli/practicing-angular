Get user input from a template reference variable

Another way to get the user data aside from '$event' is using '#var' template reference variable.
We saw this use in previous section.
We do not need the '$event' use, unnecessary casting, exposing template to component.

Formula:

// in html
<element #var (event)="template-statement">
<input #box (keyup)="0">
<p>{{ box.value }}</p>

'#box' variable refers to the '<input>' element itself.
'#box' variable is used to get the input element's value.

With this aproch;
 Template does not bind to component,
 Component does nothing

Important:
Unless we bind to an event, this won't work!
Because, Angular updates bindings.
And to satisfy syntax, make binding work, we just used '0'.

Previous example rework:

// in html
<input #box (keyup)="onKey(box.value)">

// in class
onKey(value: string){
    this.values += value;
}
Neither $event nor type casting used.