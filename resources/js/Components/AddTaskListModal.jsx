import { useForm } from '@inertiajs/react';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';
import InputError from './InputError';

export default function AddTaskListModal({ show, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tasklists.store'), { onSuccess: () => { reset(); onClose(); } });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 dark:text-gray-200">
                    Add New Task List
                </h3>
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Task List Title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Task List Description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        />
                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    <div className="flex justify-end">
                        <PrimaryButton type="submit" disabled={processing}>Save</PrimaryButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
