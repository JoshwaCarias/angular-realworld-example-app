import { JwtService } from './jwt.service';

describe('JwtService token lifecycle', () => {
  let service: JwtService;
  beforeEach(() => {
    service = new JwtService();
    localStorage.removeItem('jwtToken');
  });
  afterEach(() => localStorage.removeItem('jwtToken'));

  it('returns no token before login', () => {
    expect(service.getToken()).toBeUndefined();
  });
  it('persists and retrieves the authentication token', () => {
    service.saveToken('test-token');
    expect(service.getToken()).toBe('test-token');
  });
  it('removes the token on logout', () => {
    service.saveToken('test-token');
    service.destroyToken();
    expect(localStorage.getItem('jwtToken')).toBeNull();
  });
});
