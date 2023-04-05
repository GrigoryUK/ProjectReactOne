import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import cls from './EditableProfileCardHeader.module.scss';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;

        const { t } = useTranslation('profile');
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;
        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);
        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);
        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);
        return (
            <div
                className={classNames(cls.EditableProfileCardHeader, {}, [
                    className,
                ])}>
                <div className={cls.header}>
                    <Text title={t('Profile')} />
                    {canEdit && (
                        <div>
                            {readonly ? (
                                <Button
                                    theme={ButtonTheme.OUTLINE_NORMAL}
                                    onClick={onEdit}
                                    data-testid={
                                        'EditableProfileCardHeader.EditButton'
                                    }>
                                    {t('Edit')}
                                </Button>
                            ) : (
                                <div className={cls.btn__row}>
                                    <Button
                                        theme={ButtonTheme.OUTLINE_SUCCESS}
                                        onClick={onSave}
                                        data-testid={
                                            'EditableProfileCardHeader.SaveButton'
                                        }>
                                        {t('Save')}
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.OUTLINE_ERROR}
                                        onClick={onCancelEdit}
                                        data-testid={
                                            'EditableProfileCardHeader.CancelButton'
                                        }>
                                        {t('Cancel')}
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    },
);
