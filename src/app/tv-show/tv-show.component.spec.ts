import { async, ComponentFixture, TestBed, ɵTestingCompiler } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TvShowComponent } from './tv-show.component';
import { TvShowService } from '../tv-show.service';
import { TvshowfakeService } from '../tvshowfake.service';


describe('TvShowComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TvShowComponent],
      providers: [{provide: TvShowService, useClass: TvshowfakeService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
