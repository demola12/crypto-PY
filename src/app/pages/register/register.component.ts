import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public firstname: FormControl = new FormControl('', [Validators.required]);
  public lastname: FormControl = new FormControl('', [Validators.required]);
  public email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  public password: FormControl = new FormControl('', [Validators.required]);

  constructor(private authenticationService: AuthenticationService, private router: Router, private _snackBar: MatSnackBar)  { }

  ngOnInit(): void {
  }

  register():void{
    this.firstname.markAllAsTouched() 
    this.lastname.markAllAsTouched() 
    this.email.markAllAsTouched() 
    this.password.markAllAsTouched()
    if(
      this.firstname.valid &&
      this.lastname.valid &&
      this.email.valid &&
      this.password.valid 
    ){
      this.authenticationService.register(
        this.firstname.value,
        this.lastname.value, 
        this.email.value, 
        this.password.value
      )
      .pipe(take(1))
      .subscribe(res=>{
      // if(res.status){
        if(1 == 1){
          this._snackBar.open("Registration was Successfully", "Dismiss");
          this.router.navigate(['/dashboard'])
        }else{
          this._snackBar.open(res.message, "Dismiss");
        }
      })     
    }
  }

}
