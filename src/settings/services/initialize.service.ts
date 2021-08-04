
import { Injectable, HttpStatus } from '@nestjs/common';
import { isArray, isNull } from 'util';
import { v4 as uuidv4 } from 'uuid';
import { Mail } from 'src/core/shared/systems/mail.system';

const first = (response: any) => {
    const { status, data } = response;
    return isArray(data) ? data.length > 0 ? data[0] : null : data;
}

const results = (response: any) => {
    const { status, data } = response;
    return data;
}

@Injectable()
export class InitializeSettingService {

    constructor() {}

    public initialize = async () => {
        let paramResult = { fatalError: false };

        if (paramResult.fatalError) {
        }
        return paramResult;
    }
}
