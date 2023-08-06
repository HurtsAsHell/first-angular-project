import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Concorrente } from '../models';

@Injectable()
export class ConcorrenteService {
	@Output()
	ConcorrenteServiceEmitter = new EventEmitter()

  	constructor(private http:HttpClient) { }

	// getConcorrenteService(id_concorrente:any) {
	// 	this.http.get("http://localhost:3000/concorrenti/" + id_concorrente).subscribe((res:any) => {
	// 		this.ConcorrenteServiceEmitter.emit(res)
	// 	});
	// }
}
