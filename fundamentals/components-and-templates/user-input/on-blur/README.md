On blur

With the help of this event we get notify when element loses focus.
Such as clicking outside of input.

// in html
<input #box (blur)="update(box.value); box.value='' ">
We get the value when focus lost.
Also cleared the input with > box.value=''