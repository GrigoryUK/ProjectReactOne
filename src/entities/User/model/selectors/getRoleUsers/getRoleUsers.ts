import { createSelector } from '@reduxjs/toolkit'

import { UserRole } from '../../consts/consts'

import { StateSchema } from '@/app/providers/StoreProvider'

export const getRoleUsers = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getRoleUsers, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const isUserManager = createSelector(getRoleUsers, (roles) => Boolean(roles?.includes(UserRole.MANAGER)))
