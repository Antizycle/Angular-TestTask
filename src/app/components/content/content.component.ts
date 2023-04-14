import { Component } from '@angular/core';
import { far, IconDefinition } from '@fortawesome/free-regular-svg-icons';

const iconLibKeys = Object.keys(far)

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent {
  curIcon: IconDefinition = far[iconLibKeys[3]];

  onBtnClick() {
    setTimeout( () => {
      // generating next random index for icon collection
      const nextIconIndex = Math.floor(Math.random() * iconLibKeys.length );
      this.curIcon = far[iconLibKeys[nextIconIndex]];
    }, 3000);
  }
}
