Intercept input property changes with a setter

Angular gives us a regular method to intercept when values are being set to variables.
This method lives together @Input decorator.
Like in C# language (and many others), this method is called 'setter' method.

Example:

@Input()
set methodName(arg: type) {
    this._var = arg;
}
get methodName(): string {
    return this._var;
}

From setter method perspective, there should be a 'getter' method as well.
So 'get' method is that one.