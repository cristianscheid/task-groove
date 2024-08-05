import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TaskListCard from '@/Components/TaskListCard';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                    </div>
                </div>
            </div>

            <div className="px-6 max-w-7xl mx-auto">
                {taskLists.map((taskList, index) => (
                    <TaskListCard 
                        key={index} 
                        title={taskList.title} 
                        description={taskList.description} 
                    />
                ))}
            </div>
            
        </AuthenticatedLayout>
    );
}
