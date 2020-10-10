import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: string;
  @Output() clickLabel = new EventEmitter();

  counter = 0;
  constructor(private el: ElementRef) {

  }

  // เมื่อเมาส์ชี้เป็นสี
  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.color);
  }

  // เมื่อเมาออกสีหาย
  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  @HostListener('click') onClick() {
    this.counter++;
    if (this.counter > 3) {
      this.clickLabel.emit('this label click -> ' + this.counter );
    }
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
