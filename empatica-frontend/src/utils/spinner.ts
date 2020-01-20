import { Subject, Observable } from 'rxjs';

export class Spinner {
    private _$stateSubject: Subject<boolean>;
    private _$stateObservable: Observable<boolean>;

    constructor() {
        this._$stateSubject = new Subject();
        this._$stateObservable = this._$stateSubject.asObservable();
    }

    public get $state(): Observable<boolean> {
        return this._$stateObservable;
    }

    public on() {
        this._$stateSubject.next(true);
    }

    public off() {
        this._$stateSubject.next(false);
    }

}

export const spinner = new Spinner();