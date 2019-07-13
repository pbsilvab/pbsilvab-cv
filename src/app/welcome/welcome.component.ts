import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NotificacionesService } from '../services/notificaciones.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  stats :any = {
    likes:0,
    dislikes:0,
    normal:0,
  }

  constructor(private api: ApiService, private notification : NotificacionesService) { }

  ngOnInit() {
    this.getStatsVotes();
  }

  makeVote(voteType:string){

    this.api.makeVote(voteType).subscribe((resp)=>{
    
      this.notification.createNotification(resp);
      this.getStatsVotes();
      
    });

  }


  getStatsVotes(){

    this.api.getStatsVotes().subscribe((response_stats)=>{
      this.stats = response_stats[0];
    });

  }

}
