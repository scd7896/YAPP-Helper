import * as React from 'react'
import FileInput from '../../atomic/File/Input'
import SelectLayout from '../../template/SelectLayout'

const SendEmail = () => {
	return (
		<div>
			<SelectLayout>
				<FileInput />
			</SelectLayout>
		</div>
	)
}

export default SendEmail