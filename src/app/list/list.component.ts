import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  @Input() list: Array<{ id: number; displayName: string }> = [];
}
