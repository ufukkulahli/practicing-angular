Pass data from parent to child with input binding

HeroChildComponent has two 'input properties' marked with '@Input' decorator.
Meaning that accepts value outside of itself.
Before we learned that passing value is not possible without @Input decorator.

And we learned to use 'aliasing'.
We aliased the 'masterName' with 'master'.
It is master outside, masterName inside component.

HeroParentComponent nests HeroChildComponent into its *ngFor repeater.
When iterating each hero item in heroes collection, hero object and master string values are passed to hero child component.
HeroChildComponent gets these input values and puts them in its template.