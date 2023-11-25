import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:"[appBasicHighLight]"
})
export class BasicHighlightDirective{

constructor(private elementRef:ElementRef){
}

ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='green'
    this.elementRef.nativeElement.style.color='white'
    this.elementRef.nativeElement.style.padding='4px'
}
}