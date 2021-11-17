import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'desafio-angular';
  public cpf: any = null;
  public userCpf: any = "10046626964"
  public situation: any = null;
  public error: any = null;
  public value = {
    person: {
      name: "Brey",
      situation: "Regular"
    },
    accounts: [
      {
        number: "12313-5"
      },
      {
        number: "12313-5"
      }
    ]
  }

  public varHeigth: any = null;
  ngOnInit() {
    window.addEventListener("resize", this.heigth);
    this.heigth();
  }

  heigth() {
    this.varHeigth = window.innerHeight - 300 + "px";
  }

  verifyCPF(): boolean {
    if (this.isValidCPF()) {
      if (this.cpf === this.userCpf) {
        return true;
      } else {
        this.error = "O Usuário não encontrado."
        return false;
      }
    } else {
      this.error = "O CPF está incorreto."
      return false;
    }
  }

  isValidCPF() {
    var Soma = 0;
    if (this.cpf === undefined) {
      return false;
    }

    if (this.cpf === null) {
      return false;
    }

    var strCPF = this.cpf.replace('.', '').replace('.', '').replace('-', '');
    if (strCPF === '00000000000' || strCPF === '11111111111' || strCPF === '22222222222' || strCPF === '33333333333' ||
      strCPF === '44444444444' || strCPF === '55555555555' || strCPF === '66666666666' || strCPF === '77777777777' || strCPF === '88888888888' ||
      strCPF === '99999999999' || strCPF.length !== 11) {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }

    var Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0;
    }

    if (Resto !== parseInt(strCPF.substring(9, 10))) {
      return false;
    }

    Soma = 0;
    for (let k = 1; k <= 10; k++) {
      Soma = Soma + parseInt(strCPF.substring(k - 1, k)) * (12 - k)
    }

    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0;
    }

    if (Resto !== parseInt(strCPF.substring(10, 11))) {
      return false;
    }

    return true;
  }

}


