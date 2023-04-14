import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-content-icon',
  templateUrl: './content-icon.component.html',
  styleUrls: ['./content-icon.component.scss']
})
export class ContentIconComponent {
  @Input() icon!: IconDefinition;

}
