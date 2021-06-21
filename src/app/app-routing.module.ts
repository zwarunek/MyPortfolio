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
import {PortfolioComponent} from "./projects/portfolio/portfolio.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Zachary Warunek - Portfolio',
      description: 'This is Zachary Warunek\'s portfolio website. I am a Computer Science student attending Kettering ' +
        'University and a Software Engineer working for Ford',
      ogUrl: 'https://zacharywarunek.com/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, about, home, info, information'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Zachary Warunek - Projects',
      description: 'Zach Warunek has done various different software engineering and computer science projects',
      ogUrl: 'https://zacharywarunek.com/projects/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, personal, project, projects, side project'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Zachary Warunek - Contact',
      description: 'Fill out this form to contact Zachary Warunek',
      ogUrl: 'https://zacharywarunek.com/contact/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, contact, information, email'
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
      ogUrl: 'https://zacharywarunek.com/projects/timemachine/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, timemachine, time, machine, time machine, minecraft, plugin'
    }
  },
  {
    path: 'projects/fordsearchengine',
    component: FordsearchengineComponent,
    data: {
      title: 'Zachary Warunek - Ford Search Engine Project',
      description: 'See the Search Engine that Zachary Warunek built while working at Ford',
      ogUrl: 'https://zacharywarunek.com/projects/fordsearchengine/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, ford, project, search engine'
    }
  },
  {
    path: 'projects/flappybirdai',
    component: FlappybirdComponent,
    data: {
      title: 'Zachary Warunek - Flappy Bird AI Project',
      description: 'See the Flappy Bird AI project built by Zachary Warunek',
      ogUrl: 'https://zacharywarunek.com/projects/flappybirdai/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, flappy bird, flappy, bird'
    }
  },
  {
    path: 'projects/pathfinding',
    component: PathfindervisualizerComponent,
    data: {
      title: 'Zachary Warunek - Pathfinding Visualizer Project',
      description: 'See the Pathfinding Visualizer project built by Zachary Warunek',
      ogUrl: 'https://zacharywarunek.com/projects/pathfinding/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, path, pathfinder, ' +
        'pathfinding, algorithm, visualize, visualizer, visualizing, pathfindingvisualizer.net'
    }
  },
  {
    path: 'projects/portfolio',
    component: PortfolioComponent,
    data: {
      title: 'Zachary Warunek - Portfolio Website Project',
      description: 'See the Portfolio Website project built by Zachary Warunek',
      ogUrl: 'https://zacharywarunek.com/projects/portfolio/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, project, projects'
    }
  },
  {
    path: 'employment',
    component: EmploymentComponent,
    data: {
      title: 'Zachary Warunek - Employment History',
      description: 'See Zachary Warunek\'s employment history',
      ogUrl: 'https://zacharywarunek.com/employment/',
      keywords: 'Zach, Zachary, Zach Warunek, Zachary Warunek, Warunek, zachwarunek, zacharywarunek, zwarunek, computer,' +
        ' science, computer science, kettering university, software engineering, portfolio, employment, history, work, experience'
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
