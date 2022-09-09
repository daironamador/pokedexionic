import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import { DataPokemonService } from 'src/app/services/data-pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  providers:[DataPokemonService]
})
export class DetailPage implements OnInit {
 
  public id:any;
  public pokemon:any;
  public pokemonType: string[]=[];

  constructor(
    private rutaActiva: ActivatedRoute,
    private detailPokemonService: DataPokemonService
    ) { }

  ngOnInit() {
    this.id= this.rutaActiva.snapshot.paramMap.get('id');
  this.loadDetail();
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


}
