import { Component, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { Response} from "@angular/http";

import { ChildComponent } from "./child/child.component";
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'app';
  data ;  
  @ViewChild('cont', {read: ViewContainerRef}) cont: ViewContainerRef;


  

  constructor(private resolver: ComponentFactoryResolver, private service: HttpService){ debugger}

  ngAfterContentInit(){
    const componentFactory = this.resolver.resolveComponentFactory(ChildComponent);
    const component1 = this.cont.createComponent(componentFactory);
  }

  getdata(){
    debugger
    this.service.getInfo().subscribe((response: Response)=>{
      this.data = response["holidays"];
      console.log(this.data)

    })
  }
}
