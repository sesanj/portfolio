import { Injectable } from '@angular/core';
import { ProjectInfo } from './Models/models';
import { Projects } from '../Data/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  displayInfo: boolean = false;

  projectInfo: ProjectInfo = Projects[0];

  setProjectInfo(project: ProjectInfo) {
    this.projectInfo = project;
  }
}
