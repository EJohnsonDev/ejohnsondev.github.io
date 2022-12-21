import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './shared/components/bio/bio.component';
import { StackComponent } from './shared/components/stack/stack.component';
import { ContactComponent } from './shared/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: BioComponent },
  { path: 'stack', component: StackComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
