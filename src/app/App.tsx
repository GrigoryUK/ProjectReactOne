// eslint-disable-next-line import/order
import React, { Suspense, useEffect } from 'react';

// Добовления классов
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getUserInitialization, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const App = () => {
    const dispatch = useDispatch();
    const initialization = useSelector(getUserInitialization);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', { hovered: true, selected: true })}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initialization && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
