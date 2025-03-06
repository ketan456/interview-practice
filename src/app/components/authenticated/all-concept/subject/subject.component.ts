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
  messageReplay: string[] = [];

  constructor(private subjectService: SubjectService) {
    this.subjectService.subject$.subscribe((res) => {
      this.count = res;
    });

    this.subjectService.behavior$.subscribe((value) => {
      this.behaviorValue = value;
    });

    // Subscribe to the ReplaySubject to get last 2 values + new ones
    this.subjectService.messageReplay$.subscribe((value) => {
      this.messageReplay.push(value);
    });
  }

  print() {
    this.count++;
    this.subjectService.countIncrease(this.count);
  }

  behaviorChange(event: any) {
    this.subjectService.onChangeBehavior(event.target.value);
  }

  sendMessage() {
    const newMsg = 'Message at ' + new Date().toLocaleTimeString();
    this.subjectService.updateMessage(newMsg);
  }

  user: any;

  loadUser() {
    this.subjectService.fetchUserData(); // Trigger API fetch
    this.subjectService.userAsync$.subscribe((data) => {
      this.user = data;
    });
  }
}
