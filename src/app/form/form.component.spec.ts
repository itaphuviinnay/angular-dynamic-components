import { TestBed, async } from "@angular/core/testing";
import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent]
    }).compileComponents();
  }));

  it("should create", () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
