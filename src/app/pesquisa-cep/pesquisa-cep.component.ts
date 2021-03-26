import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa-cep',
  templateUrl: './pesquisa-cep.component.html',
  styleUrls: ['./pesquisa-cep.component.css']
})
export class PesquisaCepComponent implements OnInit {

  @Input() cep: string | null = null

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pesquisar(termo: string, evento: any) {
    evento.preventDefault()

    /// TODO: redirecionar pelo router
    this.router.navigate(['/pesquisa', termo])
    // location.href = '/pesquisa/' + termo
  }

}
