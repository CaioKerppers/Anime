import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Catalogo } from 'src/app/model/entities/Catalogo';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {

  catalogo!: Catalogo;
  temporada!: number;
  nome!: string;
  datalancamento!: Date;
  episodios!: number;
  estudio!: string;
  edicao: boolean = true;

  constructor(private alertController: AlertController,  private router: Router, private firebase: FirebaseService) { }

  ngOnInit() {
    this.catalogo = history.state.catalogo;
    this.temporada = this.catalogo.temporada;
    this.nome = this.catalogo.nome;
    this.datalancamento = this.catalogo.datalancamento;
    this.episodios = this.catalogo.episodios;
    this.estudio = this.catalogo.estudio;
  }

  editar(){
    if(this.temporada && this.nome && this.datalancamento && this.episodios && this.estudio){
      let anime: Catalogo = new Catalogo(
        this.nome,
        this.temporada,
        this.datalancamento,
        this.episodios,
        this.estudio
      )
      anime.id = this.catalogo.id;
      this.firebase.update(anime);

      this.presentAlert("Sucesso","Contato Salvo!");
      this.router.navigate(['/home']);
    }else{
      this.presentAlert("Erro", "Campos Obrigatorios");
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contados',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async confirmAlert(){
    const alert = await this.alertController.create({
      header: 'Agenda de Contados',
      subHeader: 'ATENÇÃO',
      message: 'Deseja mesmo excluir o contato?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'EXCLUIR',
        role: 'exlcuir',
        cssClass: 'ion-color-danger',
        handler: () => {
          this.excluir();
        }
      }
      ],
    });
    await alert.present();
  }

  excluir(){
    this.firebase.delete(this.catalogo);
    this.router.navigate(['/home']);
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  voltar(){
    this.router.navigate(["/home"]);
  }
}
