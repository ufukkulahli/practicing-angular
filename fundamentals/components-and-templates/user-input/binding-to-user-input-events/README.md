We will learn by decomposing typical binding to a DOM event.

// click-me.component.ts
<button (click)="onClickMe()">CLICK ME</button>

Here is the formula:
(event)="statement"

(event) is:
 button's click event
 target of the binding

"statement" is:
 template statement
 responds to click event
 by calling the component's onClickMe method