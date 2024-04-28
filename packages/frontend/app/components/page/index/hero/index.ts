import Component from '@glimmer/component';
import { action } from '@ember/object';
import Service, { inject as service } from '@ember/service';

interface UiStateService extends Service {
  isHeroVisible: boolean;
}

export default class PageIndexComponent extends Component {
  @service uiState!: UiStateService;
  
  observer!: IntersectionObserver;

  get isVisible() {
    return this.uiState.isHeroVisible;
  }

  @action
  setupObserver(element: Element) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          this.uiState.isHeroVisible = true;
        }else{
          this.uiState.isHeroVisible = false;
        }
      });
    }, options);

    this.observer.observe(element);
  }

  willDestroy() {
    super.willDestroy();
    this.observer.disconnect();
  }
}
