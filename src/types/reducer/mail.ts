interface MailState {
  id: number;
  text: string;
  title: string;
  type: string;
  headImageURL?: string;
  headImageEditMode: boolean;
  subImageEditMode: boolean;
  subImageURL?: string;
  pass: boolean | null;
}

interface MailInputState extends MailState {
  headImage?: File;
  subImage?: File;
  zipFile?: File;
  selectIndex?: number;
}
