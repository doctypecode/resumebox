import {GetStaticPaths,GetStaticProps} from 'next';
import AgraTemplate from './ClassicTemplate';

const page = () => {
    return (
        <div>
            <AgraTemplate resume={null}/>
        </div>
    );
}

// export const getStaticPaths:GetStaticPaths = async () => {


//     return {
//         paths:[],
//         fallback:false
//     }
// }
// export const getStaticProps:GetStaticProps = async (ctx) => {


//     return {
//         props:{
//             data:null
//         }
//     }
// }

export default page;