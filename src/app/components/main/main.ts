import { Component, inject, OnInit } from '@angular/core';
import { ToolsService } from '../../services/tools-service';
 
@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit{
  public tools = inject(ToolsService)
  public allProducts: any[] = [];
 
  allCards(){
    this.tools.getAllProducts().subscribe((data:any)=>this.allProducts=data)
  }

  allRooms(id:any){
    this.tools.getAllRooms(id).subscribe((data:any)=>this.allProducts=data.rooms)
  }
 
 
 
 
  ngOnInit(): void {
    this.allCards()
  }
}
