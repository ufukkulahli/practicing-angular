// to be able to use `ngModel` directive for two way data binding, we must import the `FormsModule`
// and add it to the `NgModules` import list.
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule
    ]
})
export class AppModule {}