import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CapitalGains } from "../components/capital-gains/interfaces/capital-gains.model";

@Injectable()
export class CapitalGainsService {
  _baseUrl = "api/capitalGains";

  constructor(private http:HttpClient) {}

  getCapitalGains() {
    return capitalGains_sample;
  }

  capitalGains$:Observable<CapitalGains[]> = this.http.get<CapitalGains[]>(this._baseUrl);
}

const capitalGains_sample:CapitalGains[] = [
  { investment: 'QQQ', currentValue: 1000 },
  { investment: 'MSFT', currentValue: 250 },
  { investment: 'SPGRX', currentValue: 325 }
]