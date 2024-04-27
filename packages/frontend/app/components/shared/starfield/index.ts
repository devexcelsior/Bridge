import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  color: string;
  style?: string;  // Ensure that style is a property of Star if you want to track it as part of the object
}

export default class MultiStarAnimation extends Component {
  @tracked stars: Star[] = [];
  @tracked numberOfStars = 100; // Default number of stars
  @tracked twinkleFrequency = 5; // Frequency of twinkle changes per second
  twinkleInterval!: number;

  colorDistribution = [
    { color: '#ffffff', percentage: 50 },
    { color: '#14c6cb', percentage: 10 },
    { color: '#7b42bc', percentage: 40 }
  ];

  constructor(owner: unknown, args: {}) {
    super(owner, args);
    this.initializeStars();
    this.startTwinkling();
  }

  initializeStars() {
    this.stars = [];
    for (let i = 0; i < this.numberOfStars; i++) {
      const color = this.assignColor(); // Assign a color based on distribution
      this.stars.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * (2 - 1) + 1,
        brightness: Math.random(),
        color: color
      });
    }
  }

  assignColor(): string {
    let cumulativePercentage = 0;
    const rand = Math.random() * 100;
    for (const colorInfo of this.colorDistribution) {
      cumulativePercentage += colorInfo.percentage;
      if (rand <= cumulativePercentage) {
        return colorInfo.color;
      }
    }
    return '#ffffff'; // Default color if something goes wrong
  }

  @action
  startTwinkling() {
    this.twinkleInterval = window.setInterval(() => {
      const updatedStars = this.stars.map(star => {
        if (Math.random() < 0.1) { // 10% chance to update the brightness
          return {
            ...star,
            brightness: Math.random(),
            style: this.generateStyle(star)
          };
        }
        return star;
      });
      this.stars = updatedStars;
    }, 1000 / this.twinkleFrequency);
  }

  generateStyle(star: Star) {
    const animationDuration = 1 + 1 * (1 - star.brightness); // 1s to 2s duration based on brightness
    return htmlSafe(`
        left: ${star.x}px;
        top: ${star.y}px;
        width: ${star.size}px;
        height: ${star.size}px;
        opacity: ${star.brightness};
        background-color: ${star.color};
        animation: twinkle ${animationDuration}s infinite ease-in-out;
    `);
}


  willDestroy() {
    super.willDestroy();
    clearInterval(this.twinkleInterval);
  }
}
