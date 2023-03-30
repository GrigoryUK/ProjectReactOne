import { useSelector } from 'react-redux'
import { getRoleUsers, getUserAuthData, UserRole } from '@/entities/User'
import { useLocation } from 'react-router'
import { Navigate } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { useMemo } from 'react'

export interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth ({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData)
  const userRoles = useSelector(getRoleUsers)
  const location = useLocation()

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => {
      return userRoles?.includes(requiredRole)
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
  }
  return children
}
