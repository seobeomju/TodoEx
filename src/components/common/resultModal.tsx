
interface ResultModalProps{
    show:boolean
    closeResultModal:()=>void
}

function ResultModal({show,closeResultModal}:ResultModalProps) {


    //false
    if(!show){
        return <></>
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}  >
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className={'text-4xl'}>RESULT</div>
                <button onClick={closeResultModal}>CLOSE</button>
            </div>
        </div>
    );
}

export default ResultModal;