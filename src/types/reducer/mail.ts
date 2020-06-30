interface MailState {
  id: number;
  text: string;
  title: string;
  type: string;
  headImageURL?: string;
  subImageURL?: string;
  pass: boolean | null;
}

interface MailInputState extends MailState {
  headImage?: File;
  subImage?: File;
  selectIndex?: number;
}
