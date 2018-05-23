import { PortalSiteModule } from './portal-site.module';

describe('PortalSiteModule', () => {
  let portalSiteModule: PortalSiteModule;

  beforeEach(() => {
    portalSiteModule = new PortalSiteModule();
  });

  it('should create an instance', () => {
    expect(portalSiteModule).toBeTruthy();
  });
});
