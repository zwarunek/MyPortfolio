import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {TimemachineComponent} from './projects/timemachine/timemachine.component';
import {FordsearchengineComponent} from './projects/fordsearchengine/fordsearchengine.component';
import {FlappybirdComponent} from './projects/flappybird/flappybird.component';
import {EmploymentComponent} from "./employment/employment.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PathfindervisualizerComponent} from "./projects/pathfindervisualizer/pathfindervisualizer.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Zachary Warunek - Portfolio',
      description: 'This is Zachary Warunek\'s portfolio website. I am a Computer Science student attending Kettering ' +
        'University and a Software Engineer working for Ford',
      ogUrl: 'https://zacharywarunek.com/'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Zachary Warunek - Projects',
      description: 'Zach Warunek has done various different software engineering and computer science projects',
      ogUrl: 'https://zacharywarunek.com/projects/'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Zachary Warunek - Contact',
      description: 'Fill out this form to contact Zachary Warunek',
      ogUrl: 'https://zacharywarunek.com/contact/'
    }
  },
  {
    path: 'resume',
    redirectTo: '../assets/Resume.pdf'
  },
  {
    path: 'projects/timemachine',
    component: TimemachineComponent,
    data: {
      title: 'Zachary Warunek - Time Machine Project',
      description: 'Time Machine is a Minecraft plugin built by Zachary Warunek that is a robust saving and restoring tool',
      ogUrl: 'https://zacharywarunek.com/projects/timemachine/'
    }
  },
  {
    path: 'projects/fordsearchengine',
    component: FordsearchengineComponent,
    data: {
      title: 'Zachary Warunek - Ford Search Engine Project',
      description: 'See the Search Engine that Zachary Warunek built while working at Ford',
      ogUrl: 'https://zacharywarunek.com/projects/fordsearchengine/'
    }
  },
  {
    path: 'projects/flappybirdai',
    component: FlappybirdComponent,
    data: {
      title: 'Zachary Warunek - Flappy Bird AI Project',
      description: 'See the Flappy Bird AI project built by Zachary Warunek',
      ogUrl: 'https://zacharywarunek.com/projects/flappybirdai/'
    }
  },
  {
    path: 'projects/pathfinding',
    component: PathfindervisualizerComponent,
    data: {
      title: 'Zachary Warunek - Pathfinding Visualizer Project',
      description: 'See the Pathfinding Visualizer project built by Zachary Warunek',
      ogUrl: 'https://zacharywarunek.com/projects/pathfinding/'
    }
  },
  {
    path: 'employment',
    component: EmploymentComponent,
    data: {
      title: 'Zachary Warunek - Employment History',
      description: 'See Zachary Warunek\'s employment history',
      ogUrl: 'https://zacharywarunek.com/employment/'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: 'Zachary Warunek - Page Not Found',
      description: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
