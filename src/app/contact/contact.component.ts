import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private _ContactService:ContactService){}

  registerForm:FormGroup = new FormGroup({
    full_name:new FormControl(null, [Validators.required , Validators.minLength(3),Validators.maxLength(8)]),
    email:new FormControl(null, [Validators.required , Validators.email]),
    phone_number:new FormControl(null, [Validators.required,Validators.pattern(/^(010|011|012|015)/),Validators.maxLength(11)])
  })
  submitRejister(formInfo:FormGroup){
    console.log(formInfo.value);
  }
}
