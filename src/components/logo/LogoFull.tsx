import LogoImage from '@/assets/img/finalLogo.png';
import Image from 'next/image';

const LogoFull = ({classes}:{classes?:string}) => {
    return (
        <div>
            {/* <Image src="/assets/img/finalLogo.png" alt='resume/box' width={500} height={300} /> */}
            <p className={`font-logo text-[1.5rem] py-[0.5rem] font-light ${classes}`}>
                <span className='font-medium'>resume</span>
                <span className='text-3xl'>/</span>
                <span>box</span>
            </p>
        </div>
    );
}

export default LogoFull