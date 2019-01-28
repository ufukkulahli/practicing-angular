The pipe operator ( | )

We write 'pipe operator' between 'pipes'.
Pipes are simple functions that take an input and return an transformed output.
doSomething | doThat | doThatAlso

Examples

<div>{{hero.name | uppercase}}</div>

Pipe operator passes the 'result' of an expression on the left to the pipe function on the right.
We can apply parameters to a pipe

<div>{{hero.birthday | date'longDate'}}</div>

"json' pipe is cool;
<div>{{hero | json}}</div>
result is;
{"id":1, "name":"AHero", "birthday":"1900-01-25T08:00:00.000Z"}