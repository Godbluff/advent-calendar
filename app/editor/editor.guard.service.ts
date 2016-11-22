import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EditorGuardDetail implements CanActivate {

    constructor(private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = route.url[1].path;
        console.log('Routing id: ' + id);
        if(id.length < 8 ) {
            alert('Failed calendar creation');
            // start new navigation to redirect to list page
            this._router.navigate(['/editor-front']);
            // abort current navigation
            return false;
        }
        return true;
    }

}