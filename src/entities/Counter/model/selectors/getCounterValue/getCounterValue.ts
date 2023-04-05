import { buildSelector } from '@/shared/store';

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
