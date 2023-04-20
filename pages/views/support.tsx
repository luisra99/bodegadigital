import Page from '@/components/page'
import Section from '@/components/section'
import { Button, TextField, TextareaAutosize } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const Story = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Ayudenos a mejorar</h2>

			<div className='mt-2'>
				<TextField
					id='outlined-basic'
					label='Asunto'
					variant='outlined'
					fullWidth
					sx={{ marginBottom: 2 }}
				/>
				<TextField
					id='outlined-basic'
					label='Descripcion'
					variant='outlined'
					sx={{ marginBottom: 2 }}
					fullWidth
				/>
				<Button
					variant='contained'
					endIcon={<SendIcon />}
					fullWidth
					className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
				>
					Enviar mensaje a soporte
				</Button>
			</div>
			<div className='mt-2'>
				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					Los mensajes enviados son completamente anonimos, estos ayudaran a
					nuestro equipo a mejorar el sistema teniendo en cuenta los
					requerimientos de los usuarios o responder inquietudes
				</p>
			</div>
		</Section>
	</Page>
)

export default Story
