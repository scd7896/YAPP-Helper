interface RecruitInputNameProp {
	name: RecruitInputStringType
}

interface RecruitInputCheckNameProp {
	name: RecruitInputCheckType
}

interface RecruitGuideStringInput {
	title: string,
	type: 'checked',
	name: RecruitInputCheckType
}

interface RecruitGuideCheckInput {
	title: string,
	type: 'string',
	name: RecruitInputStringType
}
type RecruitInputStringType = "startDay" | "lastDay" | "generation" | "URL"
type RecruitInputCheckType = "isRecruiting"
type RecruitInputProp = RecruitGuideStringInput | RecruitGuideCheckInput

