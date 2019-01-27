The safe navigation operator: ( ? ) 
Property paths, like: (hero.superPower.isAvailable)

We put the safe navigation operator between property paths.
Like;
{{ hero?.superPower?.isAvailable }}
Prevents the exception throwing by Angular when first two of properties are null.

Because;
{{ hero.superPower.isAvailable }}
If hero or superPower is null in this case, we get exception.

Even though third property (isAvailable) is null, we do not get null reference exception.
Because we do not invoke any member on 'isAvailable'.
This is the reason why we get 'null reference' exception.
Basically we are trying to poke a member on a does not exist member.

Alternatively we can use 'ngIf' directive or '&&' operator to avoid exception.
Like;
<div *ngIf="hero">{{hero.name}}</div> conditionally (with the help of ngIf), this div won't be rendered.
or
{{ hero && hero.name }} since hero is null, evaluation comes out false.