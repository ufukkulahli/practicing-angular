Intercept input property changes with ngOnChanges()

Another way to intercept changes is using 'ngOnChanges()' method of OnChanges lifecycle hook.
Angular calls ngOnChanges method when there is a change on property's value.
When dealing with multiple changes this method is more suitable.
Otherwise, we would have to write separate setter method for each property.