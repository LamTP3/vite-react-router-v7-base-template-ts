export class AppRoutes {
    static readonly ROOT = '/';
    static readonly PUBLIC = class {
      static readonly AUTH = {
        LOGIN: '/login',
      };
    };
    static readonly PRIVATE = class {
      static readonly DASHBOARD = '/dashboard';
    };
  }
  