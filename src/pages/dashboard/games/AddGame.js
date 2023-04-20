// Internal imports
import Layout from '../../../components/Layout/Layout';
import GameForm from '../../../components/Forms/GameForm';

export default function AddGame() {
    return (
        <Layout>
            <div>
                <h1 className="text-2xl text-gray-800 subpixel-antialiased font-bold">Add New Game</h1>
                <p className="text-small mt-2">Kindly use the form below to add a new game.</p>
                <div className="mt-4">
                    <GameForm initialData={{}} request="add" />
                </div>
            </div>
        </Layout>
    )
}
