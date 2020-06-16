const passMailTemplate: MailState = {
	title: '서류전형 결과 발표',
	text: `<p>아무튼 그런거</p><p>그러니까 일단 오시면 됩니당 ㅎㅎ</p><p>당신은 합격입니다</p>`,
	headImageURL: 'https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png',
	subImageURL: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
}

const failMailTemplate: MailState = {
	title: '서류전형 결과 발표',
	text: `<p>아무튼 그런거</p><p>당신은 불합격이에요 ㅎㅎ</p>`,
	headImageURL: 'https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png',
	subImageURL: ""
}

export const mailTemplates = [passMailTemplate, failMailTemplate]