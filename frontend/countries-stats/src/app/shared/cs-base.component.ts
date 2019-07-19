import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {Inject} from "@angular/core";

export abstract class CsBase {

  constructor( ) {
  }

  l(key: string, ...args: any[]): string {
    // TODO TRANSLATIONS
    return key;
  }

  keyToTranslate(path: string, value: string){
    return path + '.' + value.toLowerCase()
      .replace(/ /g,"_")
      .replace(/-/g,"_")
      .replace(/,/g,"")
  }

  isGranted(permissionName: string): boolean {
    // TODO PERMITIONS
    return false;
  }
}
