import LogoImg  from '../assets/logo.svg';

export function Header() {
  return (
    <div className="w-full h-52 mx-auto flex items-center justify-center bg-gray-700">
      <img className='flex items-center' src={LogoImg} />
    </div>
  );
}