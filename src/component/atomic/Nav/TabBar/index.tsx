import * as React from 'react'
import { FC } from 'react'
import styles from './styles.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface IProp {
	isSelected: boolean;
	text: string;
	handler?: () => void
}
const TabBar: FC<IProp> = ({ isSelected, text, handler }) => {
	return (
		<div className={cx("tab-wrapper", { select: isSelected })}
			onClick={handler}>
			{text}
		</div>
	)
}

export default TabBar;