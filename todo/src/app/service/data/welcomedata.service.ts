import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Hellobean{
  constructor(public string:String){

  }
}
@Injectable({
  providedIn: 'root'
})



export class WelcomedataService {

  constructor(
    private http:HttpClient
  ) { }
  executehelloworldcontroller(){
    return this.http.get<Hellobean>('http://localhost:8080/byebean');
    // console.log("this is controller");
  }


  executehelloworldcontrollerwithPathvariable(name:String){
    return this.http.get<Hellobean>(`http://localhost:8080/byebean/path-variable/${name}`);
    // console.log("this is controller");
  }

}
