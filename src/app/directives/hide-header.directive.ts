import { Directive, Input, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { DomController, isPlatform } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements AfterViewInit {
  @Input('appHideHeader') header: any;
  private headerHeight = isPlatform('ios') ? 44 : 56;
  private children: any;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
  ) { }

  ngAfterViewInit(): void {
    this.header = this.header.el;
    this.children = this.header.children;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;

    if (scrollTop < 0) {
      return;
    }

    let newPosition = -scrollTop/2;

    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }
    const newOpacity = 1 - (newPosition / -this.headerHeight);


    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', newPosition + 'px');
      for (const c of this.children) {
        this.renderer.setStyle(c, 'opacity', newOpacity);
      }
    });
  }
}
