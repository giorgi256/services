import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
 
@Injectable({ providedIn: 'root' })
 
export class ToolsService {
    public http = inject(HttpClient)
 
    getAllProducts(){
        return this.http.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
    }


    getAllRooms(id:any){
        return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
    }
}