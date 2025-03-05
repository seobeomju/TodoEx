

interface PageComponentProps<T> {

    serverData: PageResponse<T>
}

function PageComponent({serverData}: PageComponentProps<unknown> ) {

    const {page,prev,next,start,end} = serverData

    const pageNumArr =  Array.from({ length: end - start + 1 }, (_, i) => start + i);


    return (
        <div>

            {prev && <div>이전</div>}

            {pageNumArr.map((num, idx) =>
                <div key={idx}>
                    {num}
                </div>)}

            {next && <div>다음</div>}
        </div>
    );
}

export default PageComponent;