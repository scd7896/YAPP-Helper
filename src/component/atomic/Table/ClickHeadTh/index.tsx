import * as React from 'react'
import { useMemo, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { emailHeadNameList } from '../../../../util/email'
import SmallIconWrapper from '../../IconWrapper/Small'
import './styles.scss'

interface ClickHeadThProp extends FontStyle {
	index: number
}
const ClickHeadTh = ({ children, index }: ClickHeadThProp) => {
	const keySet = useSelector<RootStore>(state => state.excelKeySetForm) as excelKeySetFormState;
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const isSelected = useMemo<boolean>(() => {
		const keys = Object.keys(keySet);
		for (let i = 0 ; i < keys.length ; i++) {
			const key: SetFormKey = keys[i] as SetFormKey;
			if (keySet[key] === index) {
				return true
			}
		}
		return false
	}, [keySet])
	const printString = useMemo<string>(() => {
		if (isSelected) {
			const keys = Object.keys(keySet)
			for (let i = 0 ; i < keys.length ; i++) {
				const key: SetFormKey = keys[i] as SetFormKey;
				if (keySet[key] === index) {
					return emailHeadNameList[key]
				}
			}
		} else {
			return children
		}
	}, [isSelected])
	const listOpen = useCallback(() => {
		setIsMenuOpen(true)
	}, [])
	const listClose = useCallback(() => {
		setIsMenuOpen(false)
	}, [])
	const toggleOpen = useCallback(() => {
		setIsMenuOpen(!isMenuOpen)
	}, [isMenuOpen]) 
	return (
		<th>
			<p className="head-print-string">
				{printString}
			</p>
			<menu className="head-menu-wrapper">
				<button onClick={toggleOpen}>
					<SmallIconWrapper
						width={16} height={16}>
							&nbsp;
					</SmallIconWrapper>
				</button>
				{
					isMenuOpen &&
					<ul className={`select-menu-list ${isMenuOpen ? "open" : ""}`}>
						<li>
							셀 역할 선택
						</li>
						{
							Object.keys(keySet).map((el, index) => {
								return (
									<li>
										{el}
									</li>
								)
							})
						}
					</ul>	
				}
			</menu>
		</th>
	)
}

export default ClickHeadTh