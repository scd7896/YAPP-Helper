import * as React from 'react'
import GradeGuideIcon from '../../atomic/IconWrapper/GradeGuide'
import EmailGradeIconSet from '../../molecules/EmailGradeIconSet'

interface HeadGradeProp {
	gradeList: Array<string>
}
const HeadGrade = ({ gradeList }: HeadGradeProp) => {
	return (
		<div style={{display: 'flex'}}>
				{
					gradeList.map((grade, index) => {
						if(index === 0) {
							return <GradeGuideIcon gradeNumber={index} text="발표전형 선택"></GradeGuideIcon>
						} else {
							return (
								<EmailGradeIconSet key={index}
								gradeNumber={index}
								text={grade} />
							)
						}
					})
				}
			</div>
	)
}

export default HeadGrade