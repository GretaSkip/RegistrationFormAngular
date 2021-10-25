import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Answer, Question } from 'src/app/models/registration';
import { QuestionUpdate } from 'src/app/models/questionUpdate';

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

  public questions: Question[] = [];

  public disabled: boolean = true;

  ngOnInit(): void {
    this.registrationService.getData().subscribe((questionsFromApi) => {
      this.questions = questionsFromApi;
    })
  }

  updateData(): void{
    this.questions.forEach( (question) => {

      var updatedQuestion: QuestionUpdate = {
        id: question.id,
        answerId: question.answerId
      }

      this.registrationService.UpdateData(updatedQuestion).subscribe(()=>{
      })
         this.disabled = true;
    });

  }

}
