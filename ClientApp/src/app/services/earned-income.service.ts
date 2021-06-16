import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { EarnedIncome } from "../components/earned-income/interfaces/earned-income.model";

@Injectable({
  providedIn: 'root'
})
export class EarnedIncomeService {
  _baseUrl:string = "api/EarnedIncome";

  constructor(private http: HttpClient) {

  }

  earnedIncome$:Observable<EarnedIncome[]> = this.http.get<EarnedIncome[]>(this._baseUrl)
    .pipe(
      tap(obj => console.log('fetched earned income', obj))
    );

  addEarnedIncome(incomeObj:EarnedIncome): Observable<EarnedIncome> {
    return this.http.post<EarnedIncome>(this._baseUrl, incomeObj)
      .pipe(
        tap(obj => console.log('added earned income', obj))
      );
  }

  // earnedIncome$ = of(earnedIncome_sample);

}

const earnedIncome_sample:EarnedIncome[] = [
  {
    userId: 823,
    incomeTitle: 'Carpenter',
    incomeAmount: 2000,
    frequency: 'annual',
    isCurrent: true
  },
  {
    userId: 823,
    incomeTitle: 'Plumber',
    incomeAmount: 3000,
    frequency: 'annual',
    isCurrent: true
  },
  {
    userId: 823,
    incomeTitle: 'Writer',
    incomeAmount: 2250,
    frequency: 'annual',
    isCurrent: true
  },
]