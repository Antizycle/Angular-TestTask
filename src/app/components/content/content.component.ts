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
  debounceOn: boolean = false;
  timeoutId: ReturnType<typeof setTimeout> | null = null;

  onBtnClick() {
    if (this.debounceOn) {
      if(this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    }
    this.timeoutId = setTimeout( () => {
      // generating next random index for icon collection
      const nextIconIndex = Math.floor(Math.random() * iconLibKeys.length );
      this.curIcon = far[iconLibKeys[nextIconIndex]];
    }, 3000);
  }
}
