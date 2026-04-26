import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',


})
export class SignupComponent {
  users = {
    emailaddress: '',
    firstname: '',
    lastname: '',
    usernumber:'',
    password: '',
    confirmpassword: ''

  }

    constructor(private productservice: ProductService) { }

          usersignupdetail() {
            var checking:any={}
            checking.emailaddress = this.users.emailaddress
            checking.firstname =this.users.firstname
            checking.lastname = this.users.lastname
             checking.usernumber = this.users.usernumber
            if(this.users.password===this.users.confirmpassword){
               checking.password = this.users.password
            }

            console.log(checking);
              this.resetform();

            this.productservice.signup(checking).subscribe({
              next: (res) => {
                alert("userdetails have been saved")
                this.resetform();
              },
              error: (err) => {
                alert("user details are not saved")
              }
            })

          }
  resetform() {
    this.users = {
      emailaddress: '',
      firstname: '',
      lastname: '',
      usernumber:'',
      password: '',
      confirmpassword: ''

    }
  }
}
