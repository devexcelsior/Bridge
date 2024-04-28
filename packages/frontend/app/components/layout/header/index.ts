import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class PageHeader extends Component {
  @service uiState:any;

  @action
  toggleSidebar() {
    this.uiState.toggleSidebar();
  }

}
