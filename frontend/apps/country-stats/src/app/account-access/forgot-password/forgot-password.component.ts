import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends CsBase implements OnInit {
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;

  constructor(@Inject(FormBuilder) private _formBuilder: FormBuilder) {
    super();
    this.stepOneForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.stepTwoForm = this._formBuilder.group({
      code: ['', Validators.required]
    });
    this.stepThreeForm = this._formBuilder.group({
      newPassword: ['', Validators.required],
      newPasswordConfirm: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}