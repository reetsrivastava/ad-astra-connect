import { Nav } from '../../Nav/Nav';
import { ConnectToPeople } from './ConnectToPeople';

export const ConnectToPeopleContainer = () => {
	return (
		<div className='flex w-full items-start justify-center container'>
			<Nav />
			<div className='text-left w-full md:w-4/6 md:ml-10'>
				<h2 className='text-2xl font-bold text-left border-b py-2 mb-2 text-white px-2 bg-green-400'>Suggestions</h2>
				<ConnectToPeople />
			</div>
		</div>
	);
};