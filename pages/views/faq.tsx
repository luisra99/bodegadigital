import Page from '@/components/page'
import Section from '@/components/section'

const Story = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Preguntas frecuentes</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					<b>Que servicios brinda esta aplicacion?</b>
				</p>

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					Al registrarse en el sistema tendra su alcance de manera inmediata la
					informacion sobre la venta de los productos en los distintos puntos de
					venta.
				</p>
			</div>
		</Section>
	</Page>
)

export default Story
