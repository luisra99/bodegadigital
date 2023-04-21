import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'
import { getData } from '../service/wso2'
import Link from 'next/link'

const Index = () => (
	<Page>
		<Section>
			<div className='flex grid grid-flow-row grid-cols-4 grid-rows-2 items-center gap-4'>
				<div className='col-span-2 row-span-2 pt-2.5'>
					{/* <Image
						className='rounded-full '
						src={'../public/images/mandado2.JPG'}
						alt='mandado'
						priority
					/> */}
				</div>

				<div className='col-span-2 row-span-2'>
					<h1 className='font-bold'>BIENVENIDO A BODEGA DIGITAL</h1>
					<div className='mt-2'>
						<p className='text-zinc-600 dark:text-zinc-400'>
							En este espacio podras disfrutar de una serie de facilidades para
							acceder a los servicios gastronomicos de tu comunidad
							<br />
						</p>
					</div>
				</div>
				<div className='col-span-4 row-span-1 mt-1.5  text-center'>
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						448 mil usuarios se encuentran usando <b>BodegaDigital</b>
					</span>
				</div>
				<div className='col-span-4 mt-1.5  text-center'>
					<span className='font-normal italic text-zinc-900 dark:text-zinc-50'>
						Inicie sesion o registrese para comenzar esta nueva experiencia
						digital
					</span>
					<div className='p-2'>
						<button className='border-none-500 rounded border-transparent bg-transparent py-2 px-4 font-semibold text-blue-700'>
							<Link href='/auth-forms/signup'>REGISTRATSE</Link>
						</button>
						<button className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'>
							ACCEDER
						</button>
					</div>
				</div>
			</div>
		</Section>
	</Page>
)
export async function getServerSideProps() {
	let params = {
		key: 'APIM_FUC',
		api: 'API_DCPR_CONSULTA',
		action: '/api/v1/listar-consumidores-bodega',
		method: 'get',
		params: { oficina_id: 65, bodega_id: 4896 },
		data: {},
	}
	const data = await getData(params)
	// setDatos(data)
	// console.log('GetServerSidePropsData', data)
	return {
		props: {
			datos: data || null,
		},
	}
}
export default Index
