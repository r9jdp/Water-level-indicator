import { Card, ProgressCircle } from '@tremor/react';

export default function ProgressCircleUsageExample({count}) {
    return (
        <div className="w-max my-10 mx-auto p-3">
            <div className="space-y-3 ">
                <Card className="mx-auto max-w-sm">
                    <div className="flex justify-start space-x-5 items-center">
                        <ProgressCircle value={count} size="md">
                            <span className="text-xs font-medium text-slate-300">{count}%</span>
                        </ProgressCircle>
                        <div>
                            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                                Water level currently
                            </p>
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                water management control
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}