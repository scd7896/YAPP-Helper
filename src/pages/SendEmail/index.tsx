import * as React from 'react'
import FileInput from '../../component/atomic/File/Input'
import SelectLayout from '../../component/template/SelectLayout'

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