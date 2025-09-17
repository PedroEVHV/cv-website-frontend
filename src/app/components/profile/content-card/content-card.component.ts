import { Component, Input } from "@angular/core";
import { CardGenericContent } from "../profile.component";
import { CommonModule } from "@angular/common";


@Component({
    selector:"content-card",
    standalone:true,
    imports: [CommonModule],
    templateUrl:"./content-card.component.html",
    styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
    @Input() content:any = {};
}