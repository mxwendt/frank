import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefaultValuesService {

  defaultValuesUrl: string = 'assets/default-values.json';

  constructor(private http: HttpClient) { }

  getDefaultFontFamilies(): Observable<string[]> {
    return this.http.get(this.defaultValuesUrl).pipe(
      map((defaultValues: any) => defaultValues.fontFamily)
    );
  }
}
