import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private _snackBar: MatSnackBar) { }
  
  public email: FormControl = new FormControl("", [Validators.required])
  public password: FormControl = new FormControl("", [Validators.required])

  ngOnInit(): void {
  }

  public login():void{
    if(this.email.valid && this.password.valid){
      this.authenticationService.login(
        this.email.value,
        this.password.value
      ).pipe(take(1))
      .subscribe(res=>{
        // if(res.status){
          console.log(res)
        if(1 == 1){
          this._snackBar.open("Logged in Successfully", "Dismiss");
          this.router.navigate(['/body'])
        }else{
          this._snackBar.open("Invalid Credential try again", "Dismiss");
        }
      })
    }
  }

}
