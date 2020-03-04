import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from '../env';
import {Device} from './device.model';

@Injectable()
export class DevicesApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getDevices(): Observable<Device[]> {
	return this.http.get<Device[]>(`${API_URL}/devices`)
		.pipe(
			catchError(DevicesApiService._handleError)
		);
      //.get(`${API_URL}/devices`)
      //.catch(DevicesApiService._handleError);
  }
}