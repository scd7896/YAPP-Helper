interface MailState {
	id: number;
	text: string;
	title: string;
	type: string;
	headImageURL?: string;
	subImageURL?: string;
}

interface MailInputState extends MailState {
	headImage?: File;
	subImage?: File;
}