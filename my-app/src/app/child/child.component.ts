import { EventEmitter, Component, Output, Input} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() UserName: string;
  @Output() UserNameChange = new EventEmitter<string>();
  onNameChange(newName:string){
    this.UserName = newName;
    this.UserNameChange.emit(newName);
  }
}
