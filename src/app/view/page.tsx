import {GetStaticPaths,GetStaticProps} from 'next';
import AgraTemplate from '../template/classic/ClassicTemplate';

const page = () => {
    return (
        <div>
            
            <iframe
        src="/template/agraTemplate/"
        style={{
          width: "100%",
          height: "500px",
          border: "1px solid #ccc",
        }}
        title="Iframe Example"
      >
        <AgraTemplate resume={null}/>
      </iframe>
        </div>
    );
}


export default page;