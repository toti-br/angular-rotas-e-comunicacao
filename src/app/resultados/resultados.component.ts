import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit, OnDestroy {
  cep: string | null = null
  sub: any

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap
    .subscribe(params => this.cep = params.get('termo'))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onVoltar() {
    this.router.navigate([''])
  }


}
