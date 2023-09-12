import axios from 'axios';

const fetcher = async (AreaCode: string) => {
    const url = `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL_API_KEY}/json/citydata_ppltn/1/1/${AreaCode}`;
    const response = await axios.get(url).then((response) => {
        return response.data["SeoulRtd.citydata_ppltn"][0];
    }).catch((reason) => {console.error(reason); return null;});
    return response;
}

export default function InfoPage({ initialData }){
    console.log(initialData);

    return (
        <div>dd</div>
    )
}

export async function getServerSideProps(context: { query: { AreaCode: string; }; }) {
    const AreaCode = context.query.AreaCode;
    const data = await fetcher(AreaCode);
    return {
        props: {
            initialData: data,
        }
    }
}