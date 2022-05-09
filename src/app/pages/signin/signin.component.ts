import jwt_decode  from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private _snackBar: MatSnackBar) { }
  public token:string;
  decoded_token:any;
  public email: FormControl = new FormControl("", [Validators.required])
  public password: FormControl = new FormControl("", [Validators.required])

  ngOnInit(): void {
  }

  private getDecodedJwt(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  public login():void{
    if(this.email.valid && this.password.valid){
      this.authenticationService.login(
        this.email.value,
        this.password.value
      ).pipe(take(1),
            map((res:any) =>{
              if (res.status == true){
                return res.data.token
              }
              else
              return false
            })
        )
      .subscribe(res=>{
          console.log("The response is either Token or False ",res)
        if(res != false){
          this._snackBar.open("Logged in Successfully", "Dismiss");
          this.router.navigate(['/body']).then(()=>{
            this.token = window.localStorage.getItem('token')
                this.decoded_token = this.getDecodedJwt(this.token)
                console.log(this.decoded_token)
                localStorage.setItem('supported_blockchains',JSON.stringify(this.decoded_token.supported_blockchains));     
          })
        }else{
          this._snackBar.open("Invalid Credential try again", "Dismiss");
        }
      })
    }
  }

}
