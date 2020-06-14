import * as React from 'react'
import { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.scss'

const cx = classNames.bind(styles);

interface FilterProp {
	children: string;
	value: string;
	onClick?: (arg: string) => void;
	filterValue: string
}

const Filter: FC<FilterProp> = ({ children, value, onClick, filterValue }) => {
	const clickEvent = () => {
		onClick(value)
	}
	return (
		<p onClick={clickEvent}
			className={cx('string-style', { selected: filterValue === value })}>
			{children}
		</p>
	)
}

export default Filter;