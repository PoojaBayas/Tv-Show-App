import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TvShowComponent } from "./tv-show.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TvShowService } from "../tv-show.service";
import { TvShowFakeService } from "../tv-show-fake.service";

describe("TvShowComponent", () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TvShowComponent],
      providers: [{ provide: TvShowService, useClass: TvShowFakeService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
