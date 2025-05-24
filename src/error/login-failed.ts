export class LoginFailed {
    private _code: number
    private _message: string

    constructor() {
        this._code = 401
        this._message = 'Name e/ou senha incorreto'
    } 

    get code() {
        return this.code
    }

    get message() {
        return this._message
    }

    toJson() {
        return {
            classError: LoginFailed.name,
            code: this.code,
            message: this._message,
        }
    }

}