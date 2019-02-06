Parent calls an @ViewChild()

We use '@ViewChild()' decorator also for parent-child interaction.

In 'local variable' section we did interaction from parent template to child.
Carefully read, in 'template'.

We can not use this technique if an instance of the parent component class;
 'must' read or write child component values,
 'must' call child component methods.

So a parent component class requires that kind of access
we inject the child component into the parent as a 'ViewChild'
and hold it's reference in a variable.
With that variable we get access to the child's members from within parent component class.