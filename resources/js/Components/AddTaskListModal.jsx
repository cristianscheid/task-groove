import Modal from './Modal';
import PrimaryButton from './PrimaryButton';

export default function AddTaskListModal({ show, onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 dark:text-gray-200">
                    Add New Task List
                </h3>
                <form onSubmit={handleSubmit}>
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        />
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                        />
                    </div>
                    <div className="flex justify-end">
                        <PrimaryButton type="submit">Save</PrimaryButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
