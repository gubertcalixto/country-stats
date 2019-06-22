export abstract class CsBase {

  constructor() {
  }

  l(key: string, ...args: any[]): string {
    // TODO TRANSLATIONS
    return key;
  }

  isGranted(permissionName: string): boolean {
    // TODO PERMITIONS
    return false;
  }
}
