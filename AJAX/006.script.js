const select = document.querySelector('select');
select.addEventListener('change', () => {
    document.querySelector('.container').textContent = '';
    showTable(select.value);
})

async function showTable (value) {
    const bitInformation = await axios.get('https://api.bithumb.com/public/ticker/ALL');
    const { data } = bitInformation;
    const entry = Object.entries(data.data).filter(data => data[0] !== 'date');
    entry.sort((a, b) => {
        if (value === 'data'){
            if (a[0] > b[0]){
                return 1;
            }
            else if (a[0] < b[0]){
                return -1;
            }
            else {
                return 0;
            }
        }
        else if (value === 'average_price'){
            if ((a[1]['max_price'] - a[1]['min_price']) > (b[1]['max_price'] - b[1]['min_price'])){
                return -1;
            }
            else if ((a[1]['max_price'] - a[1]['min_price']) < (b[1]['max_price'] - b[1]['min_price'])){
                return 1;
            }
            else {
                return 0;
            }
        }
        else if (value === 'fluctate_rate_24H'){
            if (a[1][value] > b[1][value]){
                return -1;
            }
            else if (a[1][value] < b[1][value]){
                return 1;
            }
            else {
                return 0;
            }
        }
    })

    const trTag = (data, index) => `
        <tr>
            <th scope="row">${index}</th>
            <td>${data[0]}</td>
            <td>${Number(data[1]['max_price']).toLocaleString()}</td>
            <td>${Number(data[1]['min_price']).toLocaleString()}</td>
        </tr>
    `;

    const createTable = data => {
        const trs = data.reduce((acc, cur, index) => {
            acc += trTag(cur, index);
            return acc;
        }, '');

        return `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">화폐이름</th>
                        <th scope="col">최대값</th>
                        <th scope="col">최소값</th>
                    </tr>
                </thead>
                <tbody>
                    ${trs}
                </tbody>
            </table>
        `;
    };

    document
        .querySelector('.container')
        .insertAdjacentHTML('beforeend', createTable(entry));
};

showTable(select.value);