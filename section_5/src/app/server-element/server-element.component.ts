import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element:
    | { type: string; name: string; content: string }
    | undefined;
  @Input() name: string | undefined;
  @ViewChild('heading') header: ElementRef | undefined;
  @ContentChild('contentParagraph') paragraph: ElementRef | undefined;

  constructor() {
    console.log('constructor on ');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('NgOnINit');
    console.log(
      'tetx content of pargraph:' + this.paragraph?.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('NgDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(
      'tetx content of pargraph:' + this.paragraph?.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentchecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterVIewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterVIewInit');
    console.log(this.header?.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOndestroy');
  }
}
