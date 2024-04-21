import { Card, ProgressBar } from '@tremor/react';

export default function ProgressBarUsageExample({count}) {
    return (
        <>
            <Card className="my-10 mx-auto max-w-sm">
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                    <span>Low</span>
                    <span>Medium &bull; 50%</span>
                    <span>Full</span>
                </p>
                <ProgressBar value={count} color="teal" className="mt-3" />
            </Card>
        </>
    );
}