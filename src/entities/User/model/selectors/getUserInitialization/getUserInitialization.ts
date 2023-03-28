import { StateSchema } from 'app/providers/StoreProvider'

export const getUserInitialization = (state: StateSchema) => state.user.initialization
