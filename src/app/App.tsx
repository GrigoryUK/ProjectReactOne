import React, { Suspense, useEffect } from 'react'

// Добовления классов
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInitialization, userActions } from 'entities/User'

const App = () => {
  const dispatch = useDispatch()
  const initialization = useSelector(getUserInitialization)
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  return (
        <div className={classNames('app', { hovered: true, selected: true })}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    {initialization && <AppRouter/>}
                </div>
            </Suspense>
        </div>
  )
}

export default App
