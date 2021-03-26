import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import CepResponse from '../model/cep-response.model';

@Component({
  selector: 'app-resultados-cep',
  templateUrl: './resultados-cep.component.html',
  styleUrls: ['./resultados-cep.component.css']
})
export class ResultadosCepComponent implements OnInit, OnChanges {

  @Input() cep: string | null = null
  infoEndereco: CepResponse | null = null

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit(): void {
    this.pesquisarDetalhes()
  }

  ngOnChanges() {
    this.pesquisarDetalhes()
  }

  private pesquisarDetalhes() {
    if (this.cep) {
      this.cepService.pesquisarCep(this.cep)
      .subscribe(resp => this.infoEndereco = resp)
    }
  }

}
