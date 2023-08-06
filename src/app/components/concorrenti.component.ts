import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concorrente } from '../models';
import { ListaConcorrentiComponent } from './lista-concorrenti.component';

@Component({
  selector: 'app-concorrenti',
  templateUrl: '../concorrenti.component.html',
  styleUrls: ['../styles/concorrenti.component.css']
})
export class ConcorrentiComponent implements OnInit, OnDestroy {
	concorrente:Concorrente = {
		id: 0,
		nome: '',
		cognome: '',
		altezza: 0,
		punteggio: 0,
		sesso: 'male'
	}

	isModifing:boolean = false

	haveLoaded:boolean = false;
	constructor(private route: ActivatedRoute, private http:HttpClient, private router: Router) { 
		this.route.queryParams.subscribe(params => {
			this.concorrente = {
				altezza: params['altezza'],
				nome: params['nome'],
				cognome: params['cognome'],
				punteggio: params['punteggio'],
				sesso: params['sesso'],
				id: params['id']
			}
        });

		this.isModifing = true
	}
	ngOnDestroy(): void {
		this.concorrente = {
			id: 0,
			nome: '',
			cognome: '',
			altezza: 0,
			punteggio: 0,
			sesso: 'male'
		}

		this.isModifing = false
	}

	LConcorrenti = new ListaConcorrentiComponent(this.http, this.router);

	ngOnInit(): void {

	}

	addConcorrente(nome:string, cognome:string, altezza:string, punteggio:string, sesso:string) {
		// Con il + vado a fare il cast da string a numero
		let concorrente:Concorrente = {
			nome: nome,
			cognome: cognome,
			altezza: +altezza,
			punteggio: +punteggio,
			sesso: sesso,
			id : 0
		}

		this.http.post('http://localhost:3000/concorrenti', concorrente).subscribe({
			next : () => {
				this.LConcorrenti.concorrenti.push(concorrente)
				
				alert('Concorrente aggiunto correttamente!')
			},

			error : () => alert('ERRORE DELLA POST')
		});
	}

	updateConcorrente(id:any, name:any, surename:any, height:any, points:any, sex:any) : void {
		let concorrente:Concorrente = {
			nome: name,
			cognome: surename,
			altezza: +height,
			punteggio: +points,
			sesso: sex,
			id : id
		}

		this.http.put("http://localhost:3000/concorrenti/" + id, concorrente).subscribe(data => {
			this.LConcorrenti.concorrenti[id] = (concorrente)
				
			alert('Concorrente aggiornato correttamente!')
		});
		
	}

}
