import { Component } from '@angular/core';
import { SubjectService } from '../../../../service/subject/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent {
  count: number = 0;
  behaviorValue = '';
  constructor(private subjectService: SubjectService) {
    this.subjectService.subject$.subscribe((res) => {
      this.count = res;
    });
    this.subjectService.behavior$.subscribe((value) => {
      this.behaviorValue = value;
    });
  }

  print() {
    this.count++;
    this.subjectService.countIncrease(this.count);
  }

  behaviorChange(event: any) {
    this.subjectService.onChangeBehavior(event.target.value);
  }
}
