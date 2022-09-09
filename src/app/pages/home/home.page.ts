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
public carga:any='?offset=0&limit=20';
public limite:number=20;

  constructor(
    private servicePokemon: DataPokemonService,
  ) {


   }


  ngOnInit() {
   this.loadData('a');
  //  this.loadTypes(this.idTypes);
  }

  doInfinite(event){

  }
  
  loadData(event): Promise<any>{
    this.servicePokemon.getData(this.carga).subscribe(
      response =>{
        // this.data = response;
        response.results.forEach(result => {
          this.servicePokemon.getDetail(result.name)
          .subscribe(
            lastResponse=>{
              this.data.push(lastResponse);
              console.log(this.data);
            }
          )
        });

        
      }
      
    );

    
    return new Promise((resolve, reject) => {
        
      setTimeout(()=>{
        console.log('Cargando nuevos pokemones');
  
        this.carga='?offset=0&limit='+(this.limite+=20) ;
        console.log(this.carga);
        
        event.target.complete();
      },1000);
    });
  }

  

  
}



