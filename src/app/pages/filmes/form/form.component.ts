import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from 'primeng/api';

import { Filme } from '../../../interfaces/filme';
import { FilmesService } from '../../../services/filmes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [MessageService]
})
export class FormComponent implements OnInit {

  title: string = "Editar";
  currentAction: string = '';
  coverShow: string = "";
  filmes: Filme[] = [];
  filmeForm: FormGroup;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private filmesService: FilmesService,
    ) { }

  ngOnInit(): void {
    this.setCurrentAction();

    this.filmeForm = this.formBuilder.group({
      name: [null, Validators.required],
      genre: [null, Validators.required],
      typeMovie: [null, Validators.required],
      productType: [null, Validators.required],
      mainActors: [null, Validators.required],
      mainDirectors: [null, Validators.required],
      provider: [null, Validators.required],
      language: [null, Validators.required],
      price: [null, Validators.required],
      createdAt: [null, Validators.required],
      cover: [null], //Não validei por ser um teste
    });
  }

  private setCurrentAction() {
    if(this.route.snapshot.url[0].path == 'add') {
      this.currentAction = 'add';
      this.title = 'Criar';
    } else {
      this.currentAction = 'edit';
      this.title = 'Editar';
    }
    this.loadPage();      
  }

  private loadPage() {
    if(this.currentAction == 'edit') {
      this.filmesService.getFilmes().subscribe(
        (res) => {
          res.forEach( f => {
            if(f.id == parseInt(this.route.snapshot.url[1].path)){
              this.updateForm(f);
            }
          });
        }
      );
    }
  }

  private updateForm(filme: Filme) {
    this.filmeForm.patchValue({
      id: filme.id,
      name: filme.name,
      genre: filme.genre,
      typeMovie: filme.typeMovie,
      productType: filme.productType,
      mainActors: filme.mainActors,
      mainDirectors: filme.mainDirectors,
      provider: filme.provider,
      language: filme.language,
      price: filme.price,
      createdAt: filme.createdAt,
    });
    this.coverShow = filme.cover;
  }

  goBack(){
    this.location.back();
  }

  onSubmit(){
    // Adaptado para rodar sem fazer a requisição, mas para teste com JSON
    console.log(this.filmeForm.value);
    if(this.filmeForm.valid) {
      this.messageService.add({severity:'success', summary:'Sucesso', detail:'Filme Salvo com Sucesso!'});
      setTimeout(() => {this.location.back();}, 1000)
    } else {
      this.messageService.add({severity:'warn', summary:'Cuidado', detail:'Preencha todos os campos!'});
    }
  }
}
