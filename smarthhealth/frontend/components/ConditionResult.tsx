import type { Condition } from '../src/types';

type Props = {
    condition: Condition;
};

export default function ConditionResult({ condition }: Props) {
    return (
        <section >
            <h2>{condition.name}</h2>
            <h3>Causes</h3>
            <p>{condition.causes}</p>
            <h3>Symptoms</h3>
            <p>{condition.symptoms}</p>
            <h3>Treatment</h3>
            <p>{condition.treatment}</p>
        </section>
    );
}