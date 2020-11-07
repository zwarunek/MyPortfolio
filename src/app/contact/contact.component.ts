import { Component, OnInit } from '@angular/core';
import {faComments, faEnvelope, faFile, faUser, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {WebRequestService} from "../web-request.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userIcon: any = faUser
  mailIcon: any = faEnvelope
  numberIcon: any = faPhoneAlt
  messageIcon: any = faComments
  sendIcon: any = faPaperPlane
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  number: string = "";
  message: string = "";
  FormData: FormGroup;
  showConfirm: boolean = false;
  reCAPTCHAPassed: boolean = false;

  constructor(private builder: FormBuilder, private contact: WebRequestService,private http: HttpClient) {
  }
  ngOnInit(): void {
    this.FormData = this.builder.group({
      Firstname: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Number: new FormControl(''),
      Message: new FormControl('', [Validators.required])
    });
  }
  send(FormData){
    console.log(FormData);
    this.contact.post('https://vmvgvnlapl.execute-api.us-east-1.amazonaws.com/dev/sendmail', FormData, {}).subscribe((response: any) => {
      console.log(response);
    });
    this.showConfirm = true;
    this.FormData.reset();
  }
}
