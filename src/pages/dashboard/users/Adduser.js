// Internal imports
import Layout from '../../../components/Layout/Layout';
import UserForm from '../../../components/Forms/UserForm';

export default function AddUser() {
    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-gray-800 subpixel-antialiased font-bold">Add New User</h1>
                <p className="text-small mt-2">Kindly use the form below to add a new user.</p>
                <div className="mt-4">
                    <UserForm initialData={{}} request="add" />
                </div>
            </div>
        </Layout>
    )
}
