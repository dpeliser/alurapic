import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '70%';

    constructor(private elementRef: ElementRef, private render: Renderer) { }

    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.elementRef.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(this.elementRef.nativeElement, 'filter', 'brightness(100%)');
    }

}