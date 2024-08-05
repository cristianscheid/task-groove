import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function TaskListCard({taskList}) {
    return (
        <Card className="mt-6 w-96 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <CardBody>
                <Typography variant="h5" className="mb-2 dark:text-gray-100">
                    {taskList.title}
                </Typography>
                <Typography className="text-gray-700 dark:text-gray-300">
                    {taskList.description}
                </Typography>
            </CardBody>
        </Card>
    );
}
