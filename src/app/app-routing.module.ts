import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/feature/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('src/app/feature/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'educations',
        loadChildren: () =>
          import('src/app/feature/educations/educations.module').then(
            (m) => m.EducationsModule
          ),
      },
      {
        path: 'experiences',
        loadChildren: () =>
          import('src/app/feature/experiences/experiences.module').then(
            (m) => m.ExperiencesModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('src/app/feature/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
