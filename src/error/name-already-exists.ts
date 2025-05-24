export class NameAlreadyExists {
    private _code = 409
    private _message: string

    constructor(message?: string) {
        this._message = message ?? 'Name already exists'
    }

    get code() {
        return this.code
    }

    get message() {
        return this._message
    }

    toJson() {
        return {
            classError: NameAlreadyExists.name,
            code: this.code,
            message: this._message,
        }
    }

}