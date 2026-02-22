import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IUser } from 'src/app/interfaces/User/user.interface';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserAddComponent>,
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idade: [null, Validators.required],
      telefone: ['', Validators.required],
      profissao: ['', Validators.required],

      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        cidade: ['', Validators.required],
        bairro: ['', Validators.required],
        complemento: [''],
        estado: ['', Validators.required],
        cep: ['', Validators.required],
        pais: ['Brasil', Validators.required],
      }),
    });
  }

  salvar() {
    if (this.form.invalid) return;
    this.dialogRef.close(this.form.value);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
