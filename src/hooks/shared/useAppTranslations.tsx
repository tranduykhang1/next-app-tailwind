/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslations } from 'next-intl';

export const useAppTranslations = (): {
    tButton: any;
    tText: any;
    tInput: any;
    tForm: any;
    tNav: any;
} => {
    const tButton = useTranslations('Button'),
        tText = useTranslations('Text'),
        tInput = useTranslations('Input'),
        tForm = useTranslations('Form'),
        tNav = useTranslations('Nav');

    return {
        tButton,
        tText,
        tInput,
        tForm,
        tNav
    };
};
