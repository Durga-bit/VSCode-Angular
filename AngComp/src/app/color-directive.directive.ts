import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostBinding('style.border') 
    border: string='';
  
    @HostListener('mouseenter') onMouseEnter() {
      this.highLight('lightgreen');
      this.border = '2px solid black';
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highLight('');
      this.border = '';
    }
  
    private highLight(color : string){
      this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color);
    }
}
