import { Dna  } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <Dna 
       height="200"
       width="200"
       ariaLabel="dna-loading"
       wrapperStyle={{}}
       wrapperClass="dna-wrapper"
      />
    </LoaderBox>
  );
};
