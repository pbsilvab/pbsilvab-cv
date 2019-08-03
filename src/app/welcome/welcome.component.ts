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
    document.getElementById("myDIV").onmousemove = function(event) {
      console.log(event)
        var x = (event.pageX * -1.5 / 125 ); 
        var y = (event.pageY * -1.5 / 125 ); 

        let obj = document.getElementById("img1");
        obj.style.transform = 'translate3D('+x+'px,'+y+'px,0) rotate('+x+'deg)';
    };
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

  moveObjects(){

    

  }

}
