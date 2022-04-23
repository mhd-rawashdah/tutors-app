import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: any = 'Search...';
  @Output() search = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() debounce = new EventEmitter();
  _onDestroy = new Subject<void>();
  searchCtrl: FormControl = new FormControl('');

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.onTextChange();
  }


  onSubmit() {
    this.search.emit(this.searchCtrl.value);
  }

  onClear() {
    this.searchCtrl.setValue('');
    this.reset.emit();
  }

  onKey(event: any) {
    this.search.emit({ target: event.target.value });
  }

  onTextChange() {
    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe(() => {
        const value = this.searchCtrl.value;
        this.debounce.emit(value);

      });
  }

}
