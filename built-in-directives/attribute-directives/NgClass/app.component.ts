// allowing to set many properties
currentClasses: {};
setCurrentClasses() {
    this.currentClasses={
        'saveable': this.canSave,
        'modifiable': !this.isUnchanged,
        'special': this.isSpecial
    };
}