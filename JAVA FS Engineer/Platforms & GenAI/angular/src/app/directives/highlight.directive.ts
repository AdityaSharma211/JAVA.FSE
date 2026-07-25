import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  // Configurable colour: <app-course-card appHighlight="lightblue">
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef<HTMLElement>) {}

  // @HostListener binds to host element events without manually adding or
  // removing event listeners - Angular handles cleanup automatically.
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
