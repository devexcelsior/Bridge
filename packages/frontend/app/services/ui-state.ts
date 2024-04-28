import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UiStateService extends Service {
  @tracked isSidebarVisible = false;
  @tracked isHeroVisible = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
