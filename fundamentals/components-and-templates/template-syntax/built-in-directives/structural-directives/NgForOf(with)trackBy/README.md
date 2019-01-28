// *ngFor with trackBy
// NgForOf may perform poorly in large collections.
// Change to an item can trigger many DOM manipulations, add-remove

// Because of that Angular provides `trackBy`
// We use it to say framework that `track the heroes with their respective id` (in this case, id)
// `Don't think the heroes new and tear down the DOM`.

// example

// in app.component.ts file
trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
}

// in app.component.html
<div *ngFor="let hero of heroes; trackBy: trackByHeroes">
    {{hero.id}}-{{hero.name}}
</div>

// tell frwk to do tracking with `trackByHeroes` method.
// that method returns id of the hero to track with.

// https://angular.io/generated/images/guide/template-syntax/ng-for-track-by-anim.gif
// With no trackBy, both buttons trigger complete DOM element replacement.
// With trackBy, only changing the id triggers element replacement.