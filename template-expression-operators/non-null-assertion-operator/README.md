The non-null assertion operator ( ! )

This operator is meaningful to use if we turn on 'strict null checks'. (It's optional otherwise)
Let's see why.

With the '--strictNullChecks' flag, we can opt in to be in this mode.
Then Typescript's type checker works for us for scenarios like below.

Simply put, we said that we do not want;
 variables to be 'null',
 leave a variable 'unassigned',
 try to assign 'null' to a variable,
 try to assign 'undefined' to a variable.

Ok.

But after all, we needed for a 'specific' property expression to be skipped for null check.
We say to type checker to suspend just for this one.
Like;

The hero's name is {{ hero!.name }}

When the Angular compiler turns the template to Typescript code,
it prevents Typescript from reporting that 'hero.name' might be null or undefined.
Non-null assertion operator tells the Typescript type checker to suspend strict null checks for a specific property expression.

Meaning that, this operator both exists in Angular and Typescript.