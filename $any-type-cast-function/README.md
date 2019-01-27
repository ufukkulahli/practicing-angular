The $any type cast function ($any( <expression> ))

Sometimes, a 'binding expression' will be reported as a 'type error'.
And it is not possible or difficult to specify the 'type'.

To silence the error, we can use '$any' cast function to cast the expression to the 'any' type.

Example;

<div>The hero's marker is {{ $any(hero).marker }}</div>

Angular compiler turned template to Typescript code.
Prevented Typescript from reporting that 'marker' is not a member of 'hero'.

We can use 'this' with '$any' cast function.
By that, we can access to 'undeclared' members of the component.

<div>Undeclared members is {{$any(this).member}}</div>

The $any cast function can be used 'anywhere' in a 'binding expression' where a method call is 'valid'.


Extras:
'any' is a type in Typescript language.
From documentation of Typescript language:

"We may need to describe the type of variables that we do not know when we are writing an application.
These values may come from dynamic content, e.g. from the user or a 3rd party library.
In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks.
To do so, we label these with the any type:"

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean