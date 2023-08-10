import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArqBasicComponent, ArqSchemaService } from 'arq-sdk';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent
  extends ArqBasicComponent
  implements OnInit
{
  public name: string = 'hola';
  public formGroup2!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public override _schemaService: ArqSchemaService
  ) {
    super(_schemaService);
    this.formGroup2 = this.fb.group({
      provincia: ['', [Validators.required]],
      municipio: [{ value: '', disabled: true }, [Validators.required]],
      distrito: [
        { value: '', disabled: true },
        [Validators.required, Validators.maxLength(20)],
      ],
    });
  }

  override ngOnInit(): void {}
}
