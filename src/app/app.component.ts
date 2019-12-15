import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  componentRef: ComponentRef<any>;
  @ViewChild("container", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  createFormComponent() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(FormComponent);
    this.componentRef = this.container.createComponent(factory);
  }

  createListComponent() {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(ListComponent);
    const list = [
      { id: 1, displayName: "EPAM Systems" },
      { id: 2, displayName: "Microsoft" },
      { id: 3, displayName: "Service Now" },
      { id: 4, displayName: "State Street" },
      { id: 5, displayName: "JP Morgan Chase and Co" }
    ];
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.list = list;
  }
}
