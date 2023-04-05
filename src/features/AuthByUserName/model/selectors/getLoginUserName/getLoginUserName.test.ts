import { getLoginUserName } from './getLoginUserName';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginUserName.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('admin');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
