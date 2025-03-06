
interface ResultComponentProps {
    show:boolean,
    msg:string,
    closeFn: () => void
}

export default function ResultComponent({ show , msg, closeFn } :ResultComponentProps ) {


    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
             onClick={() => {

                 closeFn()
             }}
        >
            <div className="bg-green-500 p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold text-gray-700">{msg}</p>
            </div>
        </div>
    );
}
