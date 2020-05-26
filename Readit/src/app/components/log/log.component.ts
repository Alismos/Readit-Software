import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: [
  ]
})
export class LogComponent implements OnInit {


  constructor(public _cs: ChatService) { }

  ngOnInit(): void {
  }


  ingresar( proveedor: string ){
    console.log(proveedor);

    this._cs.login();
  }
}
