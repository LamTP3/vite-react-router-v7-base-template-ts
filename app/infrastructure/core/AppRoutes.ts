export class AppRoutes {
    static readonly ROOT = '/';
    static readonly PUBLIC = class {
      static readonly AUTH = {
        LOGIN: '/login',
        REGISTER: '/register',
      };
    };
    static readonly PRIVATE = class {
      static readonly DASHBOARD = '/dashboard';
    };
  }
  