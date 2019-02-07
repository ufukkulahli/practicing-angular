Parent and children communicate via a service

Another way to create interaction between parent and children components is using a shared service class.
This service could include functionalities within itself.
Then parent component injects the service through it's constructor and uses members of it.
Children components also injects the service through their constructor.
Since they are children, they get the parent's service instance.
Parent provides the instance of the service class.
Service class' instance scope is limited to parent and it's children components.
Components which do not belong that component hierarchy could not benefit of that instance.
