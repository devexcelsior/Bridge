import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PageIndexComponent extends Component {
  @tracked isVisible = false;

  observer!: IntersectionObserver;

  @action
  setupObserver(element: Element) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.isIntersecting ? this.isVisible = true : this.isVisible = false;
      });
    }, options);

    this.observer.observe(element);
  }

  willDestroy() {
    super.willDestroy();
    this.observer.disconnect();
  }
}
