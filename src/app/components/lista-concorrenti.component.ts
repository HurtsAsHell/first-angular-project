import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { Concorrente } from '../models';
import { ConcorrenteComponent } from './concorrente.component';
import { ConcorrenteService } from '../services/concorrente.service';

export interface LConcorrentiOptions {
	value: string;
	label: string;
	icon: any;
}

@Component({
  selector: 'app-lista-concorrenti',
  templateUrl: '../lista-concorrenti.component.html',
  styleUrls: ['../styles/lista-concorrenti.component.css']
})

export class ListaConcorrentiComponent implements OnInit {
	concorrente:Concorrente = {
		nome: "nome",
		cognome: "cognome",
		altezza: 0,
		punteggio: 0,
		sesso: "sesso",
		id : 1
	};

	concorrenti:Concorrente[] = [];
	sort:any;

	options:LConcorrentiOptions[] = [
		{
			icon : "female",
			value : "female",
			label : "Donne"
		},

		{
			icon : "male",
			value : "male",
			label : "Uomini"
		},

		{
			icon : "people",
			value : "all",
			label : "Tutti"
		},
	]

	public sel = {
		icon : "female",
		value : "female",
		label : "Donne"
	};

	constructor(private http:HttpClient, private router: Router) { }

	@Output() ConcorrenteEvent = new EventEmitter<Concorrente>();

	dataSource:any;
	displayedColumns:any[] = [];
	// @ViewChild(MatSort) sort: MatSort;

	// Definiamo le colonne della tabella
  	columnNames = [
		{
			id: 'id',
			value: 'id',
		}, 
		// {
		// 	id: 'nome',
		// 	value: 'Nome',
		// },
		{
			id: 'cognome',
			value: 'Cognome',
		},
		// {
		// 	id: 'altezza',
		// 	value: 'Altezza',
		// },

		{
			id: 'punteggio',
			value: 'Punteggio',
		},

		{
			id: 'sesso',
			value: 'Sesso',
		},

		{
			id: 'modifica',
			value: 'Modifica',
		},

		{
			id: 'elimina',
			value: 'Rimuovi',
		}
	];

	ngOnInit() {
		this.displayedColumns = this.columnNames.map(x => x.id);
		this.createTable();
	}
	
	createTable() {
		this.http.get("http://localhost:3000/concorrenti/?sesso=female").subscribe((res:any) => {
			this.concorrenti = res;
		})

		this.dataSource = new MatTableDataSource(this.concorrenti);
		this.dataSource.sort = this.sort;
	}

	compareFn(f1: LConcorrentiOptions, f2: LConcorrentiOptions): boolean {
		return f1 && f2? f1.value === f2.value : f1 === f2;
	}

	onOptionsSelected(value:string){
		switch(value) {
			case 'male' :
				this.http.get("http://localhost:3000/concorrenti/?sesso=male").subscribe((res:any) => {
					this.concorrenti = res;
				})
			break;

			case 'female' :
				this.http.get("http://localhost:3000/concorrenti/?sesso=female").subscribe((res:any) => {
					this.concorrenti = res;
				})
			break;

			case 'all' :
				this.http.get("http://localhost:3000/concorrenti").subscribe((res:any) => {
					this.concorrenti = res;
				})
			break;

			default :
				this.http.get("http://localhost:3000/concorrenti/?sesso=female").subscribe((res:any) => {
					this.concorrenti = res;
				})
			break;
		}
   	}

	showConcorrente(id_concorrente:any) {
		// this.router.navigateByUrl('/concorrente');
		
		setTimeout(() => {
			this.http.get("http://localhost:3000/concorrenti/" + id_concorrente).subscribe((res:any) => {
				let navigationExtras: NavigationExtras = {
					queryParams: res
				};

				this.router.navigate(["concorrente"], navigationExtras);
			});
		}, 250);
	}

	modificaConcorrente(concorrente:Concorrente) {
		let navigationExtras: NavigationExtras = {
			queryParams: concorrente
		};

		this.router.navigate(["aggiungi-c"], navigationExtras);
	}

	eliminaConcorrente(id:number) {
		this.http.delete("http://localhost:3000/concorrenti/" + id).subscribe((res:any) => {
			this.concorrenti.splice(id, 1);
		});
	}
}
