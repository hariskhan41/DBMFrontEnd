import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.ConfirmPassword.value;

    return pass === confirmPass ? 'Password do not match' :
      '';
  }

  FirstName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]);
  LastName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  CNIC = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(13), Validators.minLength(13)]);
  DateOfBirth = new FormControl('', [Validators.required]);
  Password = new FormControl('', [Validators.required, Validators.pattern('')]);

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageLastName() {
    return this.LastName.hasError('required') ? 'You must enter a value' :
      this.LastName.hasError('pattern') ? 'Last Name should not have numbers' :
        '';
  }

  getErrorMessageFirstName() {
    return this.FirstName.hasError('required') ? 'You must enter a value' :
      this.FirstName.hasError('pattern') ? 'First Name should not have numbers' :
        '';
  }

  getErrorMessageCNIC() {
    return this.CNIC.hasError('required') ? 'You must enter a value' :
      this.CNIC.hasError('pattern') ? 'CNIC should not have alphabets' :
        this.CNIC.hasError('maxlength') ? 'CNIC must have 13 digits' :
          this.CNIC.hasError('minlength') ? 'CNIC must have 13 digits' :
            '';
  }

  getErrorMessagePassword() {
    return this.FirstName.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessageDOB() {
    return this.FirstName.hasError('required') ? 'You must enter a date' :
      '';
  }



}
