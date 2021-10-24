import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Question } from 'src/app/models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registrationService!: RegistrationService;

  constructor(registrationService: RegistrationService) {
    this.registrationService = registrationService;
   }

  public id: number = 0;
  public name: string = "";
  public answerid: number = 0

  public questions: Question[] = [];

  ngOnInit(): void {
    this.registrationService.getData().subscribe((questionsFromApi) => {
      this.questions = questionsFromApi;
      console.log(this.questions);
  })
}

}
