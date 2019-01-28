Passing $event is a dubious practice.

We made the $event explicitly typed.
Passed it to the component.
Meaning that now component receives the DOM event.
Meaning that now component knows more about the 'template'.
That breaks the separation of concerns between the 'template' and 'component'.

We will address this problem in the next section.