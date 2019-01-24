@Input (decorator);
we apply it to a property.
values flow into the property when its data bound with a 'property binding'.

@Output (decorator);
we apply it to a property which is an 'observable'.
values flow out of the component as events bound with an 'event binding'.
the property almost always returns an Angular 'EventEmitter'.

Why do we need these both?
We can only do 'binding' between component and template.
If we want to bind another component (eg, appComponent->heroComponent),
we apply these decorators to other component's properties.

Examples

// binding between component + template

// app.component.html
<img [src]="iconUrl">
<button (onClick)="onSave()">SAVE</button>
'iconUrl' and 'onSave' are members of "appComponent" class.
They do not need input and output decorators.

// binding between component + other component
// appComponent -> heroDetailComponent

// app.component.html
<app-hero-detail [hero]="currentHero" (deleteRequest)="deleteHero($event)"><app-hero-detail>

// hero-detail.component.ts
@Input() hero: Hero;
@Output() deleteRequest = new EventEmitter<Hero>();

OR ALTERNATIVELY WE CAN WRITE LIKE THIS

@Component({
    inputs: ['hero'],
    outputs: ['deleteRequest']
})


// Aliasing input/output properties
When we want to provide different/better/hide internal name to outside we use aliasing.

// app.component.html
<div (myClick)="clickMessage=$event" clickable>click with myClick</div>

// click.directive.ts
@Output('myClick') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...
OR WE CAN WRITE LIKE THIS;
@Directive({
  outputs: ['clicks:myClick']  // propertyName:alias
})