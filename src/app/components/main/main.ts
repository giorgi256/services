import { Component, Inject, OnInit } from '@angular/core';
import { ToolsService } from '../../services/tools-service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit{
  public tools = Inject(ToolsService)
  public allProducts:any;

  allCards(){
    this.tools.getAllProducts().subscribe((data:any)=>this.allProducts=data)
  }




  ngOnInit(): void {
    this.allCards()
  }
}
