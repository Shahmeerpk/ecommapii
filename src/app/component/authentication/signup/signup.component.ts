import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';
import { Router, RouterLink } from '@angular/router';


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
    rolename:'',
    password: '',
    confirmpassword: ''

  }
  errorMessage: string = '';
 
 passwordmatch: boolean = true;
    constructor(private productservice: ProductService,private router:Router) { }
      checkPasswordMatch() {
  // We only show the error if both fields have some text
  if (this.users.password && this.users.confirmpassword) {
    this.passwordmatch = this.users.password === this.users.confirmpassword;
  } else {
    this.passwordmatch = true; // Hide error if fields are empty
  }
}

          usersignupdetail() {
            var checking:any={}
            checking.emailaddress = this.users.emailaddress
            checking.firstname =this.users.firstname
            checking.lastname = this.users.lastname
             checking.usernumber = this.users.usernumber
             checking.rolename = this.users.rolename
            if(this.users.password===this.users.confirmpassword){
               checking.password = this.users.password
              
            } 

            // console.log(checking);
            //   this.resetform();

            this.productservice.signup(checking).subscribe({
              next: (res) => {
                // alert("userdetails have been saved")
                this.router.navigate(['/login']);
                // this.resetform();
                
              },
              error: (err) => {
                if (err.status === 409) {
                    this.errorMessage = "This email is already in use. Try logging in.";
                  } else {
                    this.errorMessage = "Something went wrong. Please try again later.";
                  }
              }
            })
          }
  // resetform() {
  //   this.users = {
  //     emailaddress: '',
  //     firstname: '',
  //     lastname: '',
  //     usernumber:'',
  //     rolename:'',
  //     password: '',
  //     confirmpassword: ''

  //   }
  // }
}
