import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import { FeetPipe } from 'src/app/pipes/metrics/feet.pipe';
import { DataPokemonService } from 'src/app/services/data-pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  providers:[DataPokemonService, FeetPipe],
})
export class DetailPage implements OnInit {
 
  public id:any;
  public pokemon:any;
  public pokemonType: string[]=[];
  public pokemonDescription: any;
  

  constructor(
    private rutaActiva: ActivatedRoute,
    private detailPokemonService: DataPokemonService
    ) { }

  ngOnInit() {
    this.id= this.rutaActiva.snapshot.paramMap.get('id');
  this.loadDetail();
  this.loadDescription(); 
  }

  loadDetail(){
    this.detailPokemonService.getDetail(this.id).subscribe(
      result=>{
        this.pokemon = result;

        for(let i = 0; i < this.pokemon.types.length; i++){
        this.pokemonType.push(this.pokemon.types[i].type.name);
        }

         console.log(this.pokemonType);
      }, error=>{
        console.log(error);
      }
    )
  }

  loadDescription(){
    this.detailPokemonService.getDescription(this.id).subscribe(
      response=>{
        
        console.log(response);
        if(response.flavor_text_entries[26].language.name === 'es'){
          this.pokemonDescription = response.flavor_text_entries[26].flavor_text;
        } else if (response.flavor_text_entries[27].language.name === 'es'){
          this.pokemonDescription = response.flavor_text_entries[27].flavor_text;
        } else{
          this.pokemonDescription = response.flavor_text_entries[31].flavor_text;
        }

      }
    )
  }


}
