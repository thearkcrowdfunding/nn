import dynamic from 'next/dynamic';

const LeykaForm = dynamic(() => import('./leyka'), { ssr: false });

const LeykaWrapper: React.FC = () => {
  return <LeykaForm />;
};

export default LeykaWrapper;
