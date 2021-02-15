import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

import { Filme } from "../../interfaces/filme";
import { FilmesService } from '../../services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class FilmesComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(
    private router: Router,
    private filmesService: FilmesService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.filmesService.getFilmes().subscribe(
      (res) => {
        res.forEach( filme => {
          let genre="", productType="";

          if(filme.genre == 0){
            genre = "Ação";
          } else if(filme.genre == 1){
            genre = "Comédia";
          } else if(filme.genre == 2){
            genre = "Drama";
          } else if(filme.genre == 3){
            genre = "Sci-Fi";
          }

          if(filme.productType == 0){
            productType = "VHS";
          } else if(filme.productType == 1){
            productType = "DVD";
          } else if(filme.productType == 2){
            productType = "Blue-Ray";
          } else if(filme.productType == 3){
            productType = "Cloud";
          }

          this.filmes.push({
            id: filme.id,
            name: filme.name,
            provider: filme.provider,
            genre: genre,
            typeMovie: filme.typeMovie,
            productType: productType,
            mainDirectors: filme.mainDirectors
          });

        });
      }
    );
  }

  onAdd() {
    this.router.navigate(['add']);
  }

  onEdit(id: number) {
    this.router.navigate(['edit/'+id]);
  }

  openModalDelete(id: number){
    
    this.confirmationService.confirm({
        message: 'Você quer deletar esse filme?',
        header: 'Deletar Filme',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Sucesso', detail:'Filme Deletado!'});
        },
        reject: (type) => {
          console.log(type);
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Cancelado', detail:'Você cancelou a operação!'});
                break;
            }
        }
    });
  }
}
