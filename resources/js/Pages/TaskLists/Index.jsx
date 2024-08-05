import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TaskListCard from '@/Components/TaskListCard';
import PrimaryButton from '@/Components/PrimaryButton';
import AddTaskListModal from '@/Components/AddTaskListModal';

export default function Index({ auth, taskLists }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Task Lists
                </h2>
            }
        >
            <Head title="Task Lists" />

            <div className="mx-14">
                {taskLists.map((taskList) => (
                    <TaskListCard
                        key={taskList.id}
                        taskList={taskList}
                    />
                ))}
            </div>

            <PrimaryButton
                className="my-7 mx-14"
                onClick={openModal}
            >
                Add Task List
            </PrimaryButton>

            <AddTaskListModal
                show={isModalOpen}
                onClose={closeModal}
            />
        </AuthenticatedLayout>
    );
}
