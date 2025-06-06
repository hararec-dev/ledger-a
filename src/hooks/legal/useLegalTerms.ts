import { useMemo } from 'react';
import { privacyPolicy, termsAndConditions } from '@config';
import type { TypeLegalInfo } from '@types';


export const useLegalTerms = ({ typeInfo }: { typeInfo: TypeLegalInfo; }) => {
    const memoizedTerms = useMemo(() => termsAndConditions, []);
    const memoizedPolicy = useMemo(() => privacyPolicy, []);

    return {
        termsContent: typeInfo === 'terms'
            ? memoizedTerms
            : memoizedPolicy,
    };
};
