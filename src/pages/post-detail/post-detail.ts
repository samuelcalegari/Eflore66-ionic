import {NavController, NavParams} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html'
})

export class PostDetail {

  selectedItem: any;
  mois_list               : string[] = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  sexualite_list          : string[] = ["Hermaphrodite", "Monoïque", "Gynomonoïque", "Dioïque", "Androdioïque", "Gynodioïque", "Polygame", "Polygame, dioïque"];
  maturation_list         : string[] = ["", "Protandre", "Protogyne", "Homogame", "Hétérostylée"];
  pollinisation_list      : string[] = ["Anémogame", "Anémogame, autogame", "Entomogame", "Entomogame, autogame", "Autogame", "Apogame", "Hydrogame"];
  dissimination_list      : string[] = ["Anémochore", "Autochore", "Endozoochore", "Epizoochore", "Dyszoochore", "Barochore", "Myrmécochore", "Hydrochore"];
  formation_vegetale_list : string[] = ["Magnophanerophytaie", "Parvophanerophytaie", "Chamephytaie", "Hémicryptophytaie", "Geophytaie", "Therophytaie"];
  type_biologique_list    : string[] = ["Gigaphanerophytes (>64m)", "Megaphanerophytes (32 à 64m)", "Mesophanerophytes (16 à 32m)", "Microphanerophytes (8 à 16m", "Nanophanerophytes (2 à 4m)", "Fructescent", "Suffructescents", "En coussinet", "Erigés", "Stolonifère", "Cespiteux", "En rosette", "Ruboïdes", "Bisannuels", "A bulbe", "A tubercule", "A rhizome", "Vernaux", "Estivaux"];



  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  
}