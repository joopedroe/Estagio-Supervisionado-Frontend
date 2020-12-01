import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    user: any;
    error:null;
    erro=false;
    username = null;
    password = null;
    returnUrl: any;
    constructor(private router: Router, private login$:LoginService, private route: ActivatedRoute,) {}
    ngOnInit() {}
    login() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.login$.login(this.username, this.password)
          .subscribe(
            user => {
              this.router.navigateByUrl('/admin/inicio');
            },
            err => {
                this.erro=true;
                this.error = err.error
                console.log(this.error)
            }
          );
      }
}
