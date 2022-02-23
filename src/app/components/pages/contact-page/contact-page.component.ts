import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { MdcSnackbar } from '@angular-mdc/web';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  senderName: string;
  senderEmail: string;
  senderMsg: string;
  constructor(private emailService: EmailService, private snackbar: MdcSnackbar) { }

  ngOnInit(): void {
  }

  changeName(senderName:string){
    this.senderName = senderName;
  }

  changeEmail(senderEmail:string){
    this.senderEmail = senderEmail;
  }

  changeMsg(senderMsg:string){
    this.senderMsg = senderMsg;
  }

  sendEmail() {
    this.emailService.email(this.senderEmail, this.senderName, this.senderMsg).subscribe((emailRes) => {
      if(typeof emailRes["accepted"] !== "undefined"){
        this.snackbar.open("Email has been sent!");
      }
      else{
        this.snackbar.open("Your email could not be sent!");
      }
    },()=>{
      this.snackbar.open("Your email could not be sent!");
    })
  }

}
