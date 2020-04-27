import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

import { Logement } from './logement.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

// new Logement(
//   'p1',
//   'Chez Jacques',
//   'Au coeur de la ville',
//   'https://www.montpellier.fr/uploads/Image/0f/WEB_CHEMIN_7308_1245938526.jpg',
//   149.99,
//   new Date('2020-01-01'),
//   new Date('2020-12-31'),
//   'abc'
// ),
// new Logement(
//   'p2',
//   "Bise from Paris",
//   'A romantic place dans le Bronx',
//   'https://www.pologne.travel/images/fr-BE/miasta/Warszawa_540_360.jpg',
//   189.99,
//   new Date('2020-01-01'),
//   new Date('2020-12-31'),
//   'abc'
// ),
// new Logement(
//   'p3',
//   'Au bord du lac',
//   'On y trempe les pieds',
//   'https://i.pinimg.com/originals/1b/05/a7/1b05a72b188eb9b39e4c30c60897b27b.jpg',
//   99.99,
//   new Date('2020-01-01'),
//   new Date('2020-12-31'),
//   'abc'
// )

interface LogementData{
description: string;
dispoDebut: string;
dispoFin: string;
imageUrl: string;
prix: number;
title: string;
userId: string;
}
@Injectable({
  providedIn: 'root'
})
export class LogementsService {
  private _logements = new BehaviorSubject<Logement[]>([]);

  get logements() {
    return this._logements.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) {}

  fetchLogements(){
    return this.http.get<{[key:string]:LogementData}>('https://ionic-superbnb.firebaseio.com/offre-logements.json')
    .pipe(map(resData =>{
             //console.log(resData);
             const logements = [];
             for(const key in resData){
               if(resData.hasOwnProperty(key)){
                 logements.push(new Logement(key,
                                            resData[key].title,
                                            resData[key].description,
                                            resData[key].imageUrl,
                                            resData[key].prix,
                                            new Date(resData[key].dispoDebut),
                                            new Date(resData[key].dispoFin),
                                            resData[key].userId
                                            )
                                  );
               }
             }
             return logements;
    }),
    tap(logements =>{
      this._logements.next(logements);
    })

    //   tap(resData => {
    //   console.log(resData);
    // })
    );
  }

  getLogement(id: string) {
    // return this.logements.pipe(
    //   take(1),
    //   map(logements => {
    //     return { ...logements.find(p => p.id === id) };
    //   })
    // );
    return this.http.get<LogementData>(`https://ionic-superbnb.firebaseio.com/offre-logements/${id}.json`).pipe(map(logementData =>{
      return new Logement(
        id,
        logementData.title,
        logementData.description,
        logementData.imageUrl,
        logementData.prix,
        new Date( logementData.dispoDebut),
        new Date( logementData.dispoFin),
        logementData.userId
      )
    }));
  }

  addLogement(
    title: string,
    description: string,
    prix: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId:string;
    const newLogement = new Logement(
      Math.random().toString(),
      title,
      description,
      'https://www.vanupied.com/wp-content/uploads/68550354.jpg',
      prix,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.http.post<{name:string}>('https://ionic-superbnb.firebaseio.com/offre-logements.json',
    {...newLogement, id:null}).pipe(
      switchMap(resData => {        
        return this.logements
      }),
      take(1),
           tap(logements => {
             newLogement.id = generatedId;           
        this._logements.next(logements.concat(newLogement));
      })
    );
      
    // return this.logements.pipe(
    //   take(1),
    //   delay(1000),
    //   tap(logements => {
    //     this._logements.next(logements.concat(newLogement));
    //   })
    // );
  }

//   updateLogement(logementId: string, title: string, description: string) {
//     return this.logements.pipe(
//       take(1),
//       delay(1000),
//       tap(logements => {
//         const updatedLogementIndex = logements.findIndex(pl => pl.id === logementId);
//         const updatedLogements = [...logements];
//         const oldLogement = updatedLogements[updatedLogementIndex];
//         updatedLogements[updatedLogementIndex] = new Logement(
//           oldLogement.id,
//           title,
//           description,
//           oldLogement.imageUrl,
//           oldLogement.prix,
//           oldLogement.dispoDebut,
//           oldLogement.dispoFin,
//           oldLogement.userId
//         );
//         this._logements.next(updatedLogements);
//       })
//     );
//   }

updateLogement(logementId: string, title:string, description:string){
  let updatedLogements: Logement[];
  return this.logements.pipe(
    take(1),
    switchMap(logements => {
      if (!logements || logements.length <= 0) {
        return this.fetchLogements();
      } else {
        return of(logements);
      }
      
    }), 
    switchMap(logements => {
          const updatedLogementIndex = logements.findIndex(pl => pl.id === logementId);
          updatedLogements = [...logements];
          const oldLogement = updatedLogements[updatedLogementIndex];
          updatedLogements[updatedLogementIndex] = new Logement(
                      oldLogement.id,
                      title,
                      description,
                      oldLogement.imageUrl,
                      oldLogement.prix,
                      oldLogement.dispoDebut,
                      oldLogement.dispoFin,
                      oldLogement.userId
          );
          return this.http.put(`https://ionic-superbnb.firebaseio.com/offre-logements/${logementId}.json`,
          {...updatedLogements[updatedLogementIndex], id: null}
          );
    }),
    tap(()=> {
      this._logements.next(updatedLogements)
    })
   
  )
}
}
