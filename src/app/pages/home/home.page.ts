import { Component,OnInit } from '@angular/core';
import { DataPokemonService } from 'src/app/services/data-pokemon.service';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [DataPokemonService],
})
export class HomePage implements OnInit {
public data:any[] = [];
public ruta:any;
public limite:number=20;
public start: number=0

  constructor(
    private servicePokemon: DataPokemonService,
  ) {
      this.ruta='?limit=20&offset='+this.start;

   }


  ngOnInit() {
   this.loadData('');
  //  this.loadTypes(this.idTypes);
  }

  
  
  loadData(event): Promise<any>{
    this.servicePokemon.getData(this.ruta).subscribe(
      response =>{
        // this.data = response;
        response.results.forEach(result => {
          this.servicePokemon.getDetail(result.name)
          .subscribe(
            lastResponse=>{
              // console.log(lastResponse.id);
              this.data.push(lastResponse);
              this.data = this.data.sort((a,b)=> a.id - b.id);
            }
          )
        });
      }
    );
    return new Promise((resolve, reject) => {
        


      

      

      setTimeout((response, reject)=>{
        
        

        this.start += 20;
        this.ruta='?limit=20&offset='+this.start;

        console.log(this.ruta);
        event.target.complete();

      },1000);
    });
  }

  

  
}



