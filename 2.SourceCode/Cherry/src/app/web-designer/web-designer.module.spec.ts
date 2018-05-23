import { WebDesignerModule } from './web-designer.module';

describe('WebDesignerModule', () => {
  let webDesignerModule: WebDesignerModule;

  beforeEach(() => {
    webDesignerModule = new WebDesignerModule();
  });

  it('should create an instance', () => {
    expect(webDesignerModule).toBeTruthy();
  });
});
