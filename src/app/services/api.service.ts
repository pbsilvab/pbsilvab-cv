import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  apiurl:string='http://localhost:8000'

  constructor(private http:HttpClient) { }


    getStatsVotes(){
      return this.http.get(`${this.apiurl}/stats`);
    }

    makeVote(voteType : string){
      return this.http.get(`${this.apiurl}/${voteType}`);
    }

}
