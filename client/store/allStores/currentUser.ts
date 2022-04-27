import {makeAutoObservable} from "mobx";

export class CurrentUser {

    currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]')
        ?
        JSON.parse(localStorage.getItem('currentUser') || '[]')
        :
        null

    constructor() {
        makeAutoObservable(this)
    }

    setCurrentUser () {

    }
}