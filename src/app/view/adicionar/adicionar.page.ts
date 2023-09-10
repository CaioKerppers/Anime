import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Catalogo } from 'src/app/model/entities/Catalogo';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  constructor(private router : Router, private firebase: FirebaseService, private alertController: AlertController) { }
  temporada!: number;
  nome!: string;
  datalancamento!: Date;
  episodios!: number;
  estudio!: string;

  ngOnInit() {
  }

  addanime(){
    if(this.nome && this.temporada && this.datalancamento && this.episodios && this.estudio){
      let novo : Catalogo = new Catalogo(this.nome, this.temporada , this.datalancamento, this.episodios, this.estudio);
      this.firebase.create(novo)
      this.presentAlert("Sucesso", "Anime Adicionado");
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Erro", "Preencha os campos obrigatórios!");
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  voltar(){
    this.router.navigate(["/home"]);
  }
}
