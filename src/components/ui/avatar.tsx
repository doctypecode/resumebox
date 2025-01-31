import {GetStaticPaths,GetStaticProps} from 'next';

const Avatar = ({image, displayName}: any) => {
  const getInitials = () => {
    let initials = '';
    const split = displayName.split(' ');
    split.forEach((part: string) => {
      initials += part.trim() !== '' && part.trim()[0];
    })

    return initials;
  }

  const getInitialsUI = () => {
    const initials = getInitials();
    return (
      <div className='p-[1.2rem] relative border color-gray-400 rounded-full'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {initials}
        </div>
      </div>
    )
  }

  return (
    <div>
      {image ? image : getInitialsUI()}
    </div>
  );
}

export default Avatar