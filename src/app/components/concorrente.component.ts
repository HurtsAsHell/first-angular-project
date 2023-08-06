import { AfterContentChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concorrente } from '../models';
import { ConcorrenteService } from '../services/concorrente.service';

@Component({
  selector: 'app-concorrente',
  templateUrl: '../concorrente.component.html',
  styleUrls: ['../styles/concorrente.component.css']
})
export class ConcorrenteComponent implements OnInit, OnChanges {
	@Input()
	concorrente:Concorrente = {
		nome: "nome",
		cognome: "cognome",
		altezza: 0,
		punteggio: 0,
		sesso: "sesso",
		id : 1
	};

  	constructor(private route: ActivatedRoute) { 
		this.route.queryParams.subscribe(params => {
            this.concorrente.id = params['id']
			this.concorrente.nome = params['nome']
			this.concorrente.cognome = params['cognome']
			this.concorrente.punteggio = params['punteggio']
			this.concorrente.altezza = params['altezza']
			this.concorrente.sesso = params['sesso']
        });
	}

	ngOnInit(): void {
		// throw new Error('Method not implemented.');
	}


	ngOnChanges() {
		// changes.prop contains the old and the new value...

		console.log(this.concorrente.id)
	}

}
