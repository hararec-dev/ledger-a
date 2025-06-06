import { withObservables } from '@nozbe/watermelondb/react';
import type { DBComponent, DBComponentProps, DBFunction, SelectDBProps } from '../../types';


export const DBWrapperView = <T extends keyof DBComponentProps>(
    propsFn: DBFunction<SelectDBProps<T>>,
    propsList: T[]
): DBComponent<SelectDBProps<T>> => {
    // @ts-ignore
    return (wpComponent) => withObservables(propsList, propsFn)(wpComponent);
};
