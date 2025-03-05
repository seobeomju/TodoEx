

interface PageComponentProps<T> {

    serverData: PageResponse<T>
}

function PageComponent({serverData}: PageComponentProps<unknown> ) {

    const {page,size,prev,next,start,end} = serverData

    const createRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return (
        <div>
            <div>이전</div>
            <div></div>
            <div>다음</div>
        </div>
    );
}

export default PageComponent;