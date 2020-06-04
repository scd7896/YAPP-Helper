import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setExcelKeyValue } from '../../../../store/action/excelKeySetForm'
interface MailKeySetInputProp {
	name: string
	value: string
}
const MailKeySetInput = ({ name, value }: MailKeySetInputProp) => {
	const dispatch = useDispatch();
	const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setExcelKeyValue({ key: name, value: event.target.value }))
	}
	
	return(
		<input onChange={onChangeEvent} value={value} />
	)
}

export default MailKeySetInput