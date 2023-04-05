import { Popover } from '@headlessui/react';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Popups.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export type DropdownDirection =
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';
interface PopupsProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children?: ReactNode;
}

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export const Popups = memo((props: PopupsProps) => {
    const { className, direction = 'bottom right', trigger, children } = props;
    const { t } = useTranslation();
    const optionsClasses = [mapDirectionClass[direction]];
    return (
        <div className={classNames(cls.Popups, {}, [className])}>
            <Popover className="relative">
                <Popover.Button className={cls.trigger}>
                    {trigger}
                </Popover.Button>

                <Popover.Panel
                    className={classNames(cls.options, {}, optionsClasses)}>
                    {children}
                </Popover.Panel>
            </Popover>
        </div>
    );
});
